using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.ETL.Models
{
    public class FeatureStep
    {
        public int RepositoryId;

        public FeatureFile[] Files;
    }
}