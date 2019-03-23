require("dotenv").config();
var mysql = require("mysql");
var connection = mysql.createConnection({
//	host: "localhost",
//	user: "mydb",
//	password: "mydb",
//	database: "bamazon"
  host: "localhost",
  port: 3306,
  user: (process.env.DB_USERNAME || "root"),
  password: (process.env.DB_PASSWORD || "UNC1964"),
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
