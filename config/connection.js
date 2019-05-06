require("dotenv").config();
var mysql = require("mysql");
var connection = mysql.createConnection({
//	host: "localhost",
//	user: "mydb",
//	password: "mydb",
//	database: "bamazon"
  host: (process.env.DB_HOST || "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"),
  port: 3306,
  user: (process.env.DB_USERNAME || "username"),
  password: (process.env.DB_PASSWORD || "password"),
  database: (process.env.DB_DATABASE || "w2mbe8v7gqgoz5j9")
});
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
module.exports = connection;
