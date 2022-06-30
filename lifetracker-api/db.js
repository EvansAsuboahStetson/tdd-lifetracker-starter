const { Client } = require("pg");

const { getDataBaseUri } = require("./config")
require("colors")

const db = new Client({ connectionString: getDataBaseUri() });

db.connect((err) => {
  if (err) {
    console.error("connection err".red, err.stack);
  } else {
    console.log("Successfully connected to Postgress Db".blue);
  }
});
module.exports = db;
