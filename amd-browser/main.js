require.config({
  baseUrl: "./",
  paths: {
    //自定义模块
    alerter: "./alerter",
    dataService: "./dataService",
    // 第三方库模块
    jquery: "./lib/jquery.min",
  },
});
require(["alerter"], function (alerter) {
  alerter.showMsg();
});
