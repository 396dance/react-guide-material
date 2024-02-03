const h1Element = document.querySelector("h1");
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = "変更後のタイトル";
console.log(h1Element.textContent);

const btnE1 = document.querySelector("button");
const helloFn = (e) => {
  console.log(e.target.textContent);
  console.dir(e.target.textContent);
  console.log("hello");
};
btnE1.addEventListener("click", helloFn);
