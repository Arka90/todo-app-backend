const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(8000, function (err) {
  if (err) console.error("Error in listing server");
  console.log("Server listening on port 8000");
});
