const orm = require("../config/orm");

//// Test to make sure it works so far: (run this file directly)
//orm.updateOne("burgers", {devoured:true}, "id=3", false); 
//orm.insertOne("burgers", ["burger_name"], ["Jon-boy's Value Supreme"], false); 
//orm.selectAll("burgers", function(x) { console.log(x); });

//// Hoping to program this file to do this:
//burgers.devour(3);
//burgers.add("Bacon Double Cheese");
//burgers.getAll(function(x) { console.log(x); });

const burger = {
	addBurger: (burgerName, callback) => {
		orm.insertOne("burgers", ["burger_name"], [burgerName], callback);
	}
	,
	devourBurger: (id, callback) => {
		orm.updateOne("burgers", {devoured:true}, "id="+id, callback);
	}
	,
	getBurgers: (callback) => {
		orm.selectAll("burgers", function(x) { callback(x); });
	}
}

module.exports = burger;