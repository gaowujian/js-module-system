printTitle();
console.log(title);
//2. 数据不安全, 模块外可以直接访问和修改模块内数据
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
btn1.addEventListener("click", printData);
btn2.addEventListener("click", () => {
  data = "更新数据" + Math.random();
});
//  3. 模块依赖不明, 手动引入并维护造成困难
myFun();
