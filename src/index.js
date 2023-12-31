
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const path = require("path");
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended:true,
}));
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, 'resources','views'));


//route
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("");
});

// 127.0.0.1 - localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});