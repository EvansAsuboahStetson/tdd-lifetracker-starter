const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config");

const bcrypt = require("bcrypt")



const {BadRequestError, UnauthorisedError } = require('../utils/errors')

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
    const requiredFields = ["username", "password", "first_name", "last_name", "email"]
    requiredFields.forEach(field => {
      if (!credentials.hasOwnProperty(field))
      {
        throw new BadRequestError(`Missing ${field} in request body`)
        
      }
    })
    if (credentials.email.indexOf("@") <=0)
    {
      throw new BadRequestError ("Invalid Email") 
    }

    //if one does. throw an error
   const hashedPassword = await bcrypt.hash(credentials.password,BCRYPT_WORK_FACTOR)
    //takke user email and lowecase it
    const existingUser = await User.fetchUserByEmail(credentials.email)
    if (existingUser)
    {
      throw new BadRequestError(`Duplicate Email: ${credentials.email}`)
      
    }

    const lowecaseEmail = credentials.email.toLowerCase()
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
      [credentials.username,hashedPassword,credentials.first_name,credentials.last_name,lowecaseEmail]
    )
    const user = result.rows[0]
    return user

    //create new user in the database
    //return the user
  }
  static async fetchUserByEmail(email)
  {
    if (!email)
    {
      throw new BadRequestError("No email provided")
      
    }
    const query = 'SELECT * FROM users WHERE email = $1'

     
    const result = await db.query(query, [email.toLowerCase()])

    const user = result.rows[0]
    
    return user
  }
}
module.exports = User
