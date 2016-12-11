# Sunshine_Hackathon

VCS
 - Creates mock data (steps and repositories)
 To Start:
  1. Navigate to directory
  2. npm install
  3. npm start
  * This will start the server on port 3500
  * Use postman or a similar tool to verify the service is up
  
Cobrathon backend
 - API for importing data as well as for search
 To Start:
  1. Open the project in visual studio
  2. Build the project
  3. Press F5
  * This will start the server on port 58187
  * Use postman or a similar tool to verify the service is up
  
Cobrathon mongo
 - Data directory for mongodb data
 To Start Mongo Server:
  1. Navigate to mongo bin directory
  2. ./mongod.exe --dbpath /c/projects/Sunshine_Hackathon/Cobrathon/mongo/data/
  * The dbpath above may need to be changed
  
Once mongo, the vcs and the backend are running everthing should be good to go  

Endpoints:

localhost:58187/api/featurefiles/updatesteps
localhost:58187/api/featurefiles/searchsteps/{search query}
