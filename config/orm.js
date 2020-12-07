/*
This Objecct Relational Model file provides a more generic set of rules about interacting with the database.
It is more complicated than the burgers.js model file because it handles a lot of the details involved in
	performing various types of queries and returning the relevant information. Then that can all be
	re-used in a variety of contexts... not just managing burgers.
This file requires the connection.js file in order to create the connection to the database.
(Note: abstracting that level was pretty optional... we could have just included the connection info here.
	BUT it's not a bad idea to abstract one more time, in case you have any reason to leverage connections
	to different databases for different purposes. However in that case, you might actually specify which 
	connection file to use somewhere higher up in your burgers.js (or other) model file, and not here in the ORM.
	___ Can you think of how you might do that?)

*/

const connection = require("./connection.js");


function printQuestionMarks(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  const arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
	selectAll: (table, cb) => {
		let queryString = "SELECT * FROM " + table;
		connection.query(queryString, function(err, result) {
		  if (err) throw err;
		  cb(result);
		});
	}
	, insertOne: (table, columns, values, cb) => {
		let queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += columns.toString();	// [burger_name]
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(values.length);	['DoubleCHeese']
		queryString += ") ";
		connection.query(queryString, values, function(err, result) {
			if (err) { throw err; }
			if (!!cb) { cb(result); }
		});		
	}
	, updateOne: (table, updates, condition, cb) => {
		let queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(updates);
		queryString += " WHERE ";
		queryString += condition;
		connection.query(queryString, function(err, result) {
		  if (err) { throw err; }
		  if (!!cb) { cb(result); }
		});
	}
};

module.exports = orm;


