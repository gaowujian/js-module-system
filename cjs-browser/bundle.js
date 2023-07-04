(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var { data, printData, updateData } = require("./module2");
console.log("module2的导出数据:", data);
data = 20;
printData();
console.log("module2的导出数据:", data);
updateData();
printData();

console.log("测试自动化打包12333");
// npx browserify app.js -o bundle.js

},{"./module2":2}],2:[function(require,module,exports){
var title = "module2";

function printTitle() {
  console.log("title:", title);
}

var data = {
  val: "私有数据",
};
function printData() {
  console.log("打印模块内数据:", data);
}

function updateData() {
  data.val += "test";
}
module.exports = {
  title,
  data,
  printData,
  printTitle,
  updateData,
};

},{}]},{},[1]);
