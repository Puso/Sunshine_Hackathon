using backend.ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using backend.Models.ETL;

namespace backend.Controllers
{
    public class FeatureFilesController : ApiController
    {
        public async Task<IHttpActionResult> GetUpdateSteps()
        {
            ETLRunner etl = new ETLRunner();
            var result = await etl.Process();
            return Ok(result);
        }

        public async Task<List<MongoEntry>> GetStepDefinitions(string partialText)
        {
           ETLRunner etl = new ETLRunner();
            var result = await etl.GetSteps();
            List<MongoEntry> filteredSteps = new List<MongoEntry>();

            foreach (var file in result)
            {
                if (file.StepText.Contains(partialText))
                {
                    filteredSteps.Add(file);
                }
            }
            return filteredSteps;
        }
    }
}
