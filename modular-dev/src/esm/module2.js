export var title = "module2";

export function printTitle() {
  console.log("title:", title);
}

export var data = {
  val: "私有数据",
};
export function printData() {
  console.log("打印模块内数据:", data);
}
