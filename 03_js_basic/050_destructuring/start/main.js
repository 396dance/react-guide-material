// 配列に対して分割代入を使う場合は順番が重要
// const [a, , c] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(c);

// オブジェクトに対して分割代入を使う場合はプロパティ名で取ってくるので順番は気にしなくてよいが、名前を新しくつけることはできない
// const { x, z } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x);
// console.log(z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = ([country, e, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${e}`);
  console.log(`city: ${city}`);
};

const fnObj = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
// fnObj(objAddress);
