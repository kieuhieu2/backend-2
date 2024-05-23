const express = require('express');
const mongoDatabase = require('./dbConnection/index.js');
const UserService = require('./UserService.js');
const port = 3000;


const app = express();

const userService = new UserService();
userService.setDbConnection(mongoDatabase);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

const han = { name: 'han', email: 'han@gmail.com' };
userService.createUser(han);

