using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeatureFileService.ETL.Entities
{
    public class FeatureFile
    {
        public int FileId;
        public string FileName;
        public int NumberOfLines;
        public string[] FileContent;
    }
}
