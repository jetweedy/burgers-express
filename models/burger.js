/*
This burger model has business rules that describe things you might do about burgers...
 - add one, devour one, get the list of burgers
It then leverages a more generic ORM file to perform database functions like
 - insertOne
 - updateOne
 - selectAll
It's a good idea to abstract with one more layer like this in case you have other similar functions elsewhere.
	(For example, maybe elsewhere on the site, you're managing users or some other list of data.
		You can re-use the ORM logic... which is handy, since that ORM file is more complex.)
*/
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