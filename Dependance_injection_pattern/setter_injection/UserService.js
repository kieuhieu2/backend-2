const User = require('./User.js');

class UserService {
    setDbConnection(dbConnection) {
      this.dbConnection = dbConnection;
      dbConnection.connect();
    }
  
    // createUser(user) {
    //     const newUser = new User(user);
    //     newUser.save().then(() => console.log(user.name + ' was created')); 
    // }

    async createUser(user) {
      try {
        const newUser = new User(user);
        await newUser.save().then(() => 
          console.log(user.name + ' was created')
      );
      return true; 
      } catch (error) {
        console.error('Error creating user:', error);
        return null;
      }
    }
}

module.exports = UserService;