const express = require("express");
const path = require("path");
const userList = require("./user");
const app = express();

// app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 后端模板引擎渲染页面
app.get("/", (req, res) => {
  res.render("index", {
    content: "初始空白内容",
    users: [],
  });
});

// 后端直接渲染内容
app.get("/user", (req, res) => {
  res.render("index", {
    content: "用户列表",
    users: [11, 22, 33],
  });
});

// 接口api服务
app.get("/users", (req, res) => {
  res.send(userList);
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
