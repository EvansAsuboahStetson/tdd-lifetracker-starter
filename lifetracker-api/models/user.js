const { UnauthorisedError } = require('../utils/errors')

class User {
  static async login(credentials) {
    //submit email
    //If missing field throw err
    // lookup the usr in the database
    //if user is found compare passwords with the password in the db
    // if there is a match return user

    //throw error if any goes wrong

    throw new UnauthorisedError('Invalid Email/Password Combo')
  }
  static async register(credentials) {
    //submit email password
    //if field missing, throw an error
    //Make sure none of them exist in the databse
    //if one does. throw an error
    //take users password and hash it
    //takke user email and lowecase it
    //create new user in the database
    //return the user
  }
}
module.exports = User
