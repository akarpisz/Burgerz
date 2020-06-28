const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
// global.appRoot = path.resolve(__dirname);

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`);
});

