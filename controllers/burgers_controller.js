const path = require("path");
burger = require("../models/burger");

module.exports = function(app) {
	app.get("/", function(req, res) {
		burger.getBurgers(function(burgers) {
			res.render(path.join(__dirname, "../views/index"), {burgers:burgers});
		});
	});
//	app.get("/burgers", function(req, res) {
//		burger.getBurgers(function(burgers) {
//			res.json(burgers);
//		});
//	});
	app.post("/burger/add", function(req, res) {
		burger.addBurger(req.body.burger_name, function(burgers) {
			res.redirect('/');
		});
	});
	app.post("/burger/eat/:burger_id", function(req, res) {
		burger.devourBurger(req.params.burger_id, function(burgers) {
			burger.getBurgers(function(burgers) {
				res.json(burgers);
			});
		});
	});

};
