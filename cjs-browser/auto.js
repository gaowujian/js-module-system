const fs = require("fs");
const child_process = require("child_process");
const filePath = "./app.js";
console.log(`正在监听 ${filePath}`);
fs.watchFile(filePath, (cur, prv) => {
  if (filePath) {
    // 打印出修改时间
    console.log(`cur.mtime>>${cur.mtime.toLocaleString()}`);
    console.log(`prv.mtime>>${prv.mtime.toLocaleString()}`);
    // 根据修改时间判断做下区分，以分辨是否更改
    if (cur.mtime != prv.mtime) {
      console.log(`${filePath}文件发生更新`);
      child_process.execSync("npx browserify app.js -o bundle.js");
    }
  }
});
