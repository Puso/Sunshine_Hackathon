﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeatureFileService.ETL.Entities
{
    public class Step
    {
        public int RepositoryId;

        public FeatureFile[] FeatureFiles;
    }
}