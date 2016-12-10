using backend.ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

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

        public async Task<List<string>> GetStepDefinitions(string partialText)
        {
            ETLRunner etl = new ETLRunner();
            var result = await etl.GetSteps(partialText);
            List<string> filteredSteps = new List<string>();

            foreach (var file in result)
            {
                var count = file.NumberOfLines;
                for (int i = 0; i < count; i++)
                {
                    if (file.FileContent[i].Contains(partialText))
                    {
                        filteredSteps.Add(file.FileContent[i]);
                    }
                } 
            }
            return filteredSteps;
        }
    }
}
