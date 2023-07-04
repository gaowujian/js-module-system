const express = require("express");
const userList = require("./user");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/user", (req, res) => {
  res.send(userList);
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
