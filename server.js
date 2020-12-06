const PORT = process.env.PORT || 8080;

const burger = require("./models/burger")
const express = require("express")
const path = require("path");
var hbs = require( 'express-handlebars');


var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Applies some routing to our app using burgets_controller.js:
// (Hence no return value. It just adjusts the routing of the app object.)
// In turn, the burgers_controller file includes a reference to the model
// In turn, that model includes a reference to the generic orm(.js)
// In turn, the orm file includes information about the connection(.js)
require("./controllers/burgers_controller")(app);

// ---
// Telling the app to use the handlebars view/templating engine
// and setting some options like using the 'main' layout under 'views/layouts'
// https://stackoverflow.com/questions/43704187/cant-get-express-handlebars-render-an-html-page
// https://hackersandslackers.com/handlebars-templating-in-expressjs/
// ---
app.engine('handlebars', hbs({
  defaultLayout: 'main',
  extname: 'handlebars',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
// ---

// https://expressjs.com/en/starter/static-files.html
// This line sets 'public' as a static location that routes the 'normal' way
app.use(express.static('public'))
// ---

// Boot this fucker up and start flipping some burgers!
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
