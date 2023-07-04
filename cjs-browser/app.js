var { data, printData, updateData } = require("./module2");
console.log("module2的导出数据:", data);
data = 20;
printData();
console.log("module2的导出数据:", data);
updateData();
printData();

console.log("测试自动化打包12333");
// npx browserify app.js -o bundle.js
