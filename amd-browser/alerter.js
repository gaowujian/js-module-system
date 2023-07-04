// alerter.js文件
define(["dataService", "jquery"], function (dataService, $) {
  let name = "Tom";
  function showMsg() {
    console.log(dataService.getMsg() + ", " + name);
  }
  $("body").css("background", "lightblue");
  // 暴露模块
  return { showMsg };
});
