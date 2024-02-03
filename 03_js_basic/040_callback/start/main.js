function print(callback) {
  const result = callback(10);
  console.log(result);
}

function fn(number = 5) {
  return number * 2;
}

debugger;
print(fn);
// console.log(print(fn(3)));

console.log(fn(2));
console.log(fn(4));

const fnArrow = (number) => {
  console.log(number);
  return number * 2;
};

const fnArrowObj = (number) => ({ result: number * 2 });

console.log(fnArrowObj(2));
