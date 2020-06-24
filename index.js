const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose");

app.use(express.urlencoded());
app.use(express.static("./views"));

//view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use( function(req,res, next){
//   res.locals.req = req;
//   next();
// });

// use express router
app.use("/", require("./routes"));

app.listen(5000, () => {
  console.log("Listening for requests now");
});
