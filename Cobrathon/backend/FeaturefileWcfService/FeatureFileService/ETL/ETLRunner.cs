using FeatureFileService.ETL.Entities;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace FeatureFileService.ETL
{
    class ETLRunner
    {
        private HttpClient RestClient;

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
            if(response.IsSuccessStatusCode)
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
            if(response.IsSuccessStatusCode)
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
            foreach(var step in steps)
            {

                var repo = repos.FirstOrDefault(r => r.RepositoryId == step.RepositoryId);
                var repoName = (repo == null) ? $"The repo {step.RepositoryId} was not found" : repo.RepositoryName;
                Console.WriteLine($"Repo id {step.RepositoryId} is {repoName}");
                foreach (var files in step.Files)
                {
                    foreach(var content in files.FileContent)
                    {
                        var index = transformedData.FindIndex(d => d.StepText == content && d.RepoName == repoName);
                        Console.WriteLine($"The index for {content} is {index}");
                        if(index == -1)
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
            return await Task<MongoLoadResult>.Factory.StartNew(() => tmp);
        }

        /*public MongoLoadResult LoadMongoEntry(MongoEntry)
        {


        }*/
    }
}
