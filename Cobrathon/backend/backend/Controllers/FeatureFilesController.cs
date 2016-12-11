using backend.ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using backend.Models;
using MongoDB.Driver;
using MongoDB.Bson;

namespace backend.Controllers
{
    [RoutePrefix("api/featurefiles")]
    public class FeatureFilesController : ApiController
    {
        [Route("updatesteps")]
        public async Task<IHttpActionResult> GetUpdateSteps()
        {
            ETLRunner etl = new ETLRunner();
            var result = await etl.Process();
            return Ok(result);
        }

        [Route("searchsteps/{partialText}")]
        public async Task<List<MongoEntry>> GetSearchSteps(string partialText)
        {
            var client = new MongoClient();
            var database = client.GetDatabase("KIHTB");
            var collection = database.GetCollection<MongoEntry>("BddStep");

            var pattern = $"/{partialText}/i";
            var filter = Builders<MongoEntry>.Filter.Regex("stepText",
                new BsonRegularExpression(pattern));
            return await collection.Find(filter).ToListAsync();
        }
    }
}
