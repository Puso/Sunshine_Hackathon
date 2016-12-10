using backend.Models.ETL;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;

namespace backend.ETL
{
    public class ETLRunner
    {
        private HttpClient RestClient;

        private readonly string _collectionName = "BddStep";

        public ETLRunner()
        {
            RestClient = new HttpClient();
            RestClient.BaseAddress = new Uri("http://localhost:3500");
            RestClient.DefaultRequestHeaders.Accept.Clear();
            RestClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<Repository[]> ExtractRepositories()
        {
            HttpResponseMessage response = await RestClient.GetAsync("/repositories");
            Repository[] repos = new Repository[0];
            if (response.IsSuccessStatusCode)
            {
                var repoContainer = await response.Content.ReadAsAsync<RepositoriesResponse>();
                repos = repoContainer.Repositories;
            }
            return repos;
        }

        public async Task<FeatureStep[]> ExtractFeatureSteps()
        {
            HttpResponseMessage response = await RestClient.GetAsync("/steps");
            FeatureStep[] steps = new FeatureStep[0];
            if (response.IsSuccessStatusCode)
            {
                var featureSteps = await response.Content.ReadAsAsync<FeatureSteps>();
                steps = featureSteps.Steps;
            }
            return steps;
        }

        public List<MongoEntry> TransformMongoEntry(Repository[] repos, FeatureStep[] steps)
        {
            List<MongoEntry> transformedData = new List<MongoEntry>();
            Console.WriteLine("In transform");
            foreach (var step in steps)
            {

                var repo = repos.FirstOrDefault(r => r.RepositoryId == step.RepositoryId);
                var repoName = (repo == null) ? $"The repo {step.RepositoryId} was not found" : repo.RepositoryName;
                Console.WriteLine($"Repo id {step.RepositoryId} is {repoName}");
                foreach (var files in step.Files)
                {
                    foreach (var content in files.FileContent)
                    {
                        var index = transformedData.FindIndex(d => d.StepText == content && d.RepoName == repoName);
                        Console.WriteLine($"The index for {content} is {index}");
                        if (index == -1)
                        {
                            transformedData.Add(new MongoEntry()
                            {
                                RepoName = repoName,
                                StepText = content,
                                NumOcurrences = 1
                            });
                        }
                        else
                        {
                            ++transformedData[index].NumOcurrences;
                        }

                    }
                }

            }
            return transformedData;
        }

        public async Task<MongoLoadResult> Process()
        {
            var repos = await ExtractRepositories();
            var steps = await ExtractFeatureSteps();

            var transformed = TransformMongoEntry(repos, steps);
            var tmp = new MongoLoadResult()
            {
                NumberOfStepsLoaded = 3,
                NumberOfStepsToLoad = 3
            };
            return await LoadMongoEntry(transformed);
        }

        public async Task<MongoLoadResult> LoadMongoEntry(List<MongoEntry> dataToLoad)
        {
            var result = new MongoLoadResult();
            result.NumberOfStepsToLoad = dataToLoad.Count;
            var client = new MongoClient();//"mongodb://localhost:27017");
            var database = client.GetDatabase("KIHTB");
            await database.DropCollectionAsync(_collectionName);

            var collection = database.GetCollection<MongoEntry>(_collectionName);

            await collection.InsertManyAsync(dataToLoad);
            result.NumberOfStepsLoaded = (int)collection.Count(new BsonDocument());
            return result;
        }

        public async Task<List<MongoEntry>> GetSteps()
        {
            var client = new MongoClient();
            var database = client.GetDatabase("KIHTB");
            var collection = database.GetCollection<MongoEntry>(_collectionName);
            
            var result = await collection.Find(new BsonDocument()).ToListAsync();
            return result;
        }
    }
}