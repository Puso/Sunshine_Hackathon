using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class MongoEntry
    {
        public ObjectId _id { get; set; }
        public string stepText;
        public string repoName;
        public int numOcurrences;
    }
}