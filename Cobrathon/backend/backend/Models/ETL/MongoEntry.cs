using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.ETL
{
    public class MongoEntry
    {
        public ObjectId ID { get; set; }
        public string StepText;
        public string RepoName;
        public int NumOcurrences;
    }
}