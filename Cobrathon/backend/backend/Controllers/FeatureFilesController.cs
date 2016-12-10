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
    }


}
