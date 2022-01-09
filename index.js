import { str, a, arr, hello, obj, Person } from "./component.js";
import App from './other.js'
console.log(a);
console.log(str);
console.log(obj);
console.log(arr);
hello();
let person = new Person();
console.log(person);
let newApp = new App("Some random text");
console.log(newApp);

// import App from './other.js';
// import *as all from './component.js';
// console.log(all);
// console.log(all.a);
// console.log(all.str);
// all.hello();
// let newApp = new App("Some random text");
// console.log(newApp);