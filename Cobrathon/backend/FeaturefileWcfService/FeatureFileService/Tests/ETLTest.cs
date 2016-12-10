using FeatureFileService.ETL;
using FeatureFileService.ETL.Entities;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeatureFileService.Tests
{
    [TestFixture]
    class ETLTest
    {
        private readonly ETLRunner _etl = new ETLRunner();
        [Test]
        public async Task TestExtractRepos()
        {
            var repos = await _etl.ExtractRepositories();
            Assert.IsTrue(repos.Length > 0);
        }

        [Test]
        public async Task TestExtractSteps()
        {
            var steps = await _etl.ExtractFeatureSteps();
            Assert.IsTrue(steps.Length > 0);
        }

        [Test]
        public void TestTransformSteps()
        {
            var repos = new Repository[3];
            var steps = new FeatureStep[4];
            var transformed = _etl.TransformMongoEntry(repos, steps);
            Assert.IsTrue(transformed.Count > 0);
        }

        [Test]
        public async Task TestProcess()
        {
            var result = await _etl.Process();
            Assert.IsTrue(result.NumberOfStepsLoaded == result.NumberOfStepsToLoad);
        }
    }
}
