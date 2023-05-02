const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

//paths
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const hbs = require("hbs");

// set the path in the app
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
app.set("views", templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
