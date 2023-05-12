 const bodyParser = require('body-parser');
const express = require('express');
const { options } = require('nodemon/lib/config');
const app = express()
const port = 4000

let items = ["Monthly Goals", "Weekly Goals", "Daily Goals"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded ({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  
let today = new Date();

let option = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

let day = today.toLocaleDateString("en-US", options);


res.render("list", {kindOfDay: day, newListItems: items});
});

app.post('/', (req, res) => {
 let item = req.body.newItem;

  items.push(item);
  res.redirect("/");

});

app.listen(port, () => {
  console.log("app listening on port 4000")
});


