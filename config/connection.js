/*
This file handles making our connection to the database, as used by the ORM file.
It uses the dotenv library to read some variables in from the .env file.
That .env file is ignored by the repository in order to preserve credential privacy.
*/

require("dotenv").config();
var mysql = require("mysql");
var connection = mysql.createConnection(process.env.DB_URL);
/*
var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD
});
*/
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
module.exports = connection;
