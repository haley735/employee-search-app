### Development Environment Used
MacOS, terminal, Visual Studio Code, Google Chrome, Postman Desktop

### Design Decisions

1. Tech Stack: MERN
    - MongoDB
    - Express.js
    - React
    - Node
I chose a pure JavaScript for a couple of reasons:
    - From research, this is the most common frontend/backend combination for its scalability and ability for quick development. 
    - Having a pure JavaScript stack also means that you don't have to think about difference languages from client and server side operations. 
    - It's new for me and wanted to challenge myself. I can only grow if I'm slightly uncomfortable. 

2. Database Structure & Implementation

    I've never worked with MongoDB before, but I've heard of it and how easy and new it is to work with. I wasn't expecting it to be non-relational, but it         definitely suited this application. MongoDB automatically assigns unique IDs to entries added to the database, which makes implementation and management easier. MongoDB holds collections of entries that can be added through the app form or through the api. The api supports 1 or more entries to test. I have provided a test JSON of mock data with 100 entries that can be uploaded using the api (I used Postman for this). The forms work for creating and updating single entries at a time. 

3. Areas to Expand
    - Pagination of the table
    - Backend unit testing
    - Reorganize more detailed view with actual images
    - Sort by ascending and descending on the categories from the drop down
    - Expand on options for departments
    - Improved styling

### Setup and Dev Deployment 
- Clone the 'employee-search-app' repository

#### Package Installation
Once repository cloning has been completed:
- Enter the 'employee-search-app' directory: `cd employee-search-app`
- Install node packages: `npm install`
    - This should install all necessary packages for the react app
- Enter the 'backend' directory: `cd backend`
- Install node packages: `npm install`
    - This should install all necessary packages for the backend MongoDB framework

#### Running Locally
For me, the React app was hosted on port 3000. The MongoDB database is set to port 4000. (More database server specific can be found in **backend/server.js.**)The employee schema is located at **backend/employee.model.js**. A test set of data is located at **backend/MOCK_DATA.json.**

You will need three terminal windows. One for running the react app, one for running server.js, and one for a connection to the MongoDB database. 
First, you can start the react app: `yarn start `.

Second, you can start the MongoDB database connection. I personally had propblems with this in the beginning, so I hope the same commands work for you. 
These answers helped me: 
    
    https://stackoverflow.com/questions/56237646/exception-in-initandlisten-nonexistentpath-data-directory-data-db-not-found
    
    https://stackoverflow.com/questions/63562177/mongod-aborts-on-mac

To start the database connection: `mongod --dbpath 'path/to/db'`

Third, you'll start the express server (Make sure you're inside the 'backend' directory first): `nodemon server`

Everything should be running from there. You can open your browser (Chrome suggested) to your react localhost port and start creating employees one by one. 

#### API commands
    localhost:4000/employees/add => POST request to add 1 or more employees through a JSON format
    localhost:4000/employees/delete/:id => DELETE request to delete an employee by ID
    localhost:4000/employees => GET request to get the entire list of employees
    localhost:4000/employees/:id => GET request to get an employee by ID
    localhost:4000/employees/update/:id => POST request to update an employee by ID

#### Adding multiple employees via api
I used Postman to test my apis were working correctly in the beginning and then expanded to implement a delete api and make the add api take more than 1 entry. In order to load in more than 1 entry, you'll want to open Postman and make a new POST request with `localhost:4000/employees/add` as the connection point. You'll choose 'Raw' input in a 'JSON' format. Then you can copy and paste all of the entries from MOCK_DATA.json into editor, beautify, and send the request. 

When you go back to refresh the react app, you'll notice all of the entries are listed in the employees table. One note is that the options for departments don't match those given in the form, but are still valid department regardless. This is an area of improvement moving forward. 
