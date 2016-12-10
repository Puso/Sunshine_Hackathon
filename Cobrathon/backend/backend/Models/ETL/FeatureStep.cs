using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.ETL
{
    public class FeatureStep
    {
        public int RepositoryId;

        public FeatureFile[] Files;
    }
}