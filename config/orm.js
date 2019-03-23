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
		let queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
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


