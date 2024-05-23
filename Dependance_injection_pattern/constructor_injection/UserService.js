const User = require('./User.js');

class UserService {
    constructor(dbConnection) {
      this.dbConnection = dbConnection;
      dbConnection.connect();
    }

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