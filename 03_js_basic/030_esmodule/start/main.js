import { hello } from "./module.js";
import { User } from "./module.js";
import funcB from "./module.js";
hello();
const user = new User("Tom");
user.hello();

const aaa = funcB(5);
console.log(aaa);
