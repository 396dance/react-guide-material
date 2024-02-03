export const hello = () => {
  console.log("hello!の関数");
};

const funcB = (num) => {
  console.log("funcB outputデフォルトエクスポート");
  console.log(num);
  return num + 4;
};

export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

export { User };
