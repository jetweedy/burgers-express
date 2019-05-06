const PORT = process.env.PORT || 8080;

const burger = require("./models/burger")
const express = require("express")
const path = require("path");
var hbs = require( 'express-handlebars');


var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./controllers/burgers_controller")(app);

// ---
// HELP FROM:
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

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
