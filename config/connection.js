require("dotenv").config();
var mysql = require("mysql");
var connection = mysql.createConnection({
//	host: "localhost",
//	user: "mydb",
//	password: "mydb",
//	database: "bamazon"
  host: (process.env.DB_HOST || "localhost"),
  port: 3306,
  user: (process.env.DB_USERNAME || "username"),
  password: (process.env.DB_PASSWORD || "password"),
  database: "burgers_db"
});
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
module.exports = connection;
