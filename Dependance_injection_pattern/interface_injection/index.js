const express = require('express');
const mongoDatabase = require('./dbConnection/index.js');
const UserService = require('./UserInterface.js');
const mongoCRUD = require('./mongoCRUD.js');
const port = 3000;

const app = express();

//create db connection
const dbConnection = mongoDatabase.connect();

//create User interface
const userInterface = new UserService();

userInterface.dbConnection = dbConnection;


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })  

// const han = { name: 'haninterface', email: 'han@gmail.com' };
// userInterface.createUser(han);

