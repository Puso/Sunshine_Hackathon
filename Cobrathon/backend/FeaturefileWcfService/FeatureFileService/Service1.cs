using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using MongoDB.Bson;
using MongoDB.Driver;

namespace FeatureFileService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in both code and config file together.
    public class Service1 : IService1
    {
        public string GetStepText(string value)
        {
            //Mongodb tutorial: http://mongodb.github.io/mongo-csharp-driver/2.2/getting_started/quick_tour/

            //var client = new MongoClient();//"mongodb://localhost:27017");
            //var database = client.GetDatabase("test");
            //var collection = database.GetCollection<BsonDocument>("myColl");
            //var steps = new BsonDocument
            //{
            //    {"stepText","Given I log on under DRInsightAll User"},
            //    {"repoName","git-corp-marvel"},
            //    {"stepText","Given I am on Price/Volume page"},
            //    {"repoName","git-corp-marvel"}
            //};
            //collection.InsertOne(steps);

            //var mydocument = collection.Find(new BsonDocument()).FirstOrDefault();
            //Console.WriteLine(value);//(mydocument.ToString());
            return value;

        }

        public string SaveStepText(string step)
        {
            return step;
        }

        public CompositeType GetDataUsingDataContract(CompositeType composite)
        {
            if (composite == null)
            {
                throw new ArgumentNullException("composite");
            }
            if (composite.BoolValue)
            {
                composite.StringValue += "Suffix";
            }
            return composite;
        }
    }
}
