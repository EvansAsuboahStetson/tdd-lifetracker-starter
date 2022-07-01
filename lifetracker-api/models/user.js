const db = require("../db");
const { BCRYPT_WORK_FACTOR } = require("../config");

const bcrypt = require("bcrypt");

const { BadRequestError, UnauthorisedError } = require("../utils/errors");

class User {

  static async MakePublicUser(user)
  {
    return {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      created_at: user.created_at,
      updated_at: user.updated_at
    }
  }
  static async login(credentials) {
    //submit email
    //If missing field throw err

    const requiredFields = [
      "password",
      "email"
    ];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });


      const user = await User.fetchUserByEmail(credentials.email);
    if (user) {
      const isValid = await bcrypt.compare(credentials.password, user.password)
      if (isValid)
      {
        return User.MakePublicUser(user)
      }
    }

    // lookup the usr in the database
    //if user is found compare passwords with the password in the db
    // if there is a match return user

    //throw error if any goes wrong

    throw new UnauthorisedError("Invalid Email/Password Combo");
  }
  static async register(credentials) {
    //submit email password

    //if field missing, throw an error
    //Make sure none of them exist in the databse
    const requiredFields = [
      "username",
      "password",
      "first_name",
      "last_name",
      "email",
    ];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });
    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid Email");
    }
     if (credentials.username.trim().length < 1)
    {
      throw new BadRequestError(`Username  Field is Empty`)
    }
    if (credentials.first_name.trim().length < 1)
    {
      throw new BadRequestError(`First Name Field is Empty`)
    }
       if (credentials.last_name.trim().length < 1)
    {
      throw new BadRequestError(`Last Name Field is Empty`)
    }

    if (credentials.password.trim().length < 1)
    {
      throw new BadRequestError("Password Field is Empty")  
    }


    //if one does. throw an error
    const hashedPassword = await bcrypt.hash(
      credentials.password,
      BCRYPT_WORK_FACTOR
    );
    //takke user email and lowecase it
    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(`Duplicate Email: ${credentials.email}`);
    }

    const lowecaseEmail = credentials.email.toLowerCase();
    const result = await db.query(
      `
    INSERT INTO users (
      username,
      password,
      first_name,
      last_name, 
       email
    )
    VALUES ($1,$2,$3,$4,$5)
    RETURNING id,username, password,first_name,last_name,email, created_at,updated_at
    `,
      [
        credentials.username.trim(),
        hashedPassword,
        credentials.first_name.trim(),
        credentials.last_name.trim(),
        lowecaseEmail,
      ]
    );
    const user = result.rows[0];
    return User.MakePublicUser(user);

    //create new user in the database
    //return the user
  }
  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    const query = "SELECT * FROM users WHERE email = $1";

    const result = await db.query(query, [email.toLowerCase()]);

    const user = result.rows[0];

    return user;
  }
}
module.exports = User;
