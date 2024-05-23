const UserService = require('./UserService.js');
const User = require('./User.js');

describe('UserService', () => {
  let userService;
  let mockDbConnection;
  let expectedResult;

  beforeEach(() => {
    jest.clearAllMocks();

    userService = new UserService();
    expectedResult = { _id: 'mockId', name: 'Han', email: 'han@gmail.com' };
    User.prototype.save = jest.fn().mockResolvedValue(expectedResult);
    
    mockDbConnection = {
      connect: jest.fn(),
      create: jest.fn() //.mockResolvedValue(expectedResult),
    };

    userService.setDbConnection(mockDbConnection);
  });

  test('connects to the database', () => {
    userService.setDbConnection(mockDbConnection);
    expect(mockDbConnection.connect).toHaveBeenCalled();
  });
    test('creates a User model and saves it to the database', async () => {
        const newUser = new User({ name: 'Han', email: 'han@gmail.com' });

        const result = await userService.createUser(newUser);
        expect(result).toEqual(true);
    }, 10000);
});