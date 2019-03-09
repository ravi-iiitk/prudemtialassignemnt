#READ ME
------------------------------
#FRAMEWORK: 

1. It is Page Object Pattern using Cucumber & Protractor. 
2. **Structure**:
   -**Project Folder**
        -**Common Library** - Which consists of common utilities code
        -**node_modules** - Dev node modules for the project
        -**resources** - Contains the extra resources required for project
        -**page objects** - contains modules for each page 
        -**test-reports** - Directory contains test reports & screenshots. 
        -**test-sceanrios** - contains feature file & step definations. 
     -**Conf file**- Main configuration files used for running the project
     - **package.json** - Is the file contains all the information about packages & dependencies required. 
     

#HOW TO RUN
1. Git clone to te code from the GitHub Repository
2. Open commond prompt- Go to the project folder. 
3. Use Package.json to install all dependencies 
4. fire command : protractor conf.js to start running the test. 