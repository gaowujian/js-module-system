(() => {
  var e = {
      371: (e) => {
        (e.exports.T = "module1"),
          (e.exports.K = () => {
            console.log("title:", title);
          });
      },
    },
    o = {};
  function t(n) {
    var r = o[n];
    if (void 0 !== r) return r.exports;
    var c = (o[n] = { exports: {} });
    return e[n](c, c.exports, t), c.exports;
  }
  (() => {
    "use strict";
    var e = t(371),
      o = { val: "私有数据" };
    function n() {
      console.log("打印模块内数据:", o);
    }
    window.onload = function () {
      console.log(e.T), (0, e.K)();
      const t = document.querySelector("#btn-1"),
        r = document.querySelector("#btn-2");
      t.addEventListener("click", n),
        r.addEventListener("click", () => {
          o = "更新数据" + Math.random();
        });
    };
  })();
})();
