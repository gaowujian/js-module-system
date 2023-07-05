const module1 = require("./module1");
const { title, data, printData, printTitle } = require("./module2");
const { myFun } = require("./module3");

window.onload = function () {
  // 1. 函数和变量会变量提升，会造成全局的变量污染，如果存在同名，会造成覆盖
  console.log(module1.title);
  module1.printTitle();
  //2. 数据不安全, 模块外可以直接访问和修改模块内数据
  const btn1 = document.querySelector("#btn-1");
  const btn2 = document.querySelector("#btn-2");
  btn1.addEventListener("click", printData);
  btn2.addEventListener("click", () => {
    data = "更新数据" + Math.random();
  });
  //  3. 模块间依赖不明, 手动引入并维护造成困难
  // myFun();
};
