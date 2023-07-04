const fs = require("fs");

// 基于回调，异步编程范式
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("err:", err);
    return console.log("读取文件内容失败");
  }
  console.log("data:", data);
});

console.log("hello world");

// 同步编程
const content = fs.readFileSync("./test.txt", "utf-8");
console.log("content:", content);
console.log("hello world");
