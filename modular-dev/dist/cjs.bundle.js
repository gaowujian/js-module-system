(() => {
  var t = {
      389: (t) => {
        (t.exports.title = "module1"),
          (t.exports.printTitle = () => {
            console.log("title:", title);
          });
      },
      52: (t) => {
        var e = "module2",
          o = { val: "私有数据" };
        t.exports = {
          title: e,
          printTitle: function () {
            console.log("title:", e);
          },
          data: o,
          printData: function () {
            console.log("打印模块内数据:", o);
          },
        };
      },
      725: (t) => {
        t.exports = {
          myFun: function () {
            console.log("myFun");
          },
        };
      },
    },
    e = {};
  function o(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var l = (e[n] = { exports: {} });
    return t[n](l, l.exports, o), l.exports;
  }
  (() => {
    const t = o(389),
      { title: e, data: n, printData: i, printTitle: l } = o(52),
      { myFun: r } = o(725);
    window.onload = function () {
      console.log(t.title), t.printTitle();
      const e = document.querySelector("#btn-1"),
        o = document.querySelector("#btn-2");
      e.addEventListener("click", i),
        o.addEventListener("click", () => {
          n = "更新数据" + Math.random();
        });
    };
  })();
})();
