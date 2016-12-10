using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.ETL
{
    public class Step
    {
        public int RepositoryId;

        public FeatureFile[] FeatureFiles;
    }
}