//clources

//  == and ===
// == loses the Datatype and check the value.
// === first checkes  value (data type).
// console.log(0 == "0"); //true
// console.log(0 === "0"); //false
// console.log(false == "0"); //true
// console.log(false === "0"); //false
// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log([] == false); // true
// console.log([] === false);
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b); //false
// console.log(a === b);//false
// Lexical Environment /Scope Chain
// 🔹 If a variable is not found in the current scope, JavaScript looks up the chain to parent scopes until it reaches the global scope.
// 1️⃣ Own Scope (Local Scope) → 2️⃣ Outer Scope → 3️⃣ Global Scope
// JavaScript first looks for a variable in the current function (local scope).
// 👉 If not found, it moves up to the outer function (parent scope).
// 👉 If still not found, it checks the global scope.
// Global Scope (var let const)
// var is function-scoped (stays inside a function).
// var is not block-scoped (modifies global variables from inside {}).
// var a = 1;  // Global scope
// let b = 2;  // Global scope
// const c = 3; // Global scope
// if (true) {
//     var a = 10;  // ✅ Overwrites global `a`
//     let b = 20;  // ✅ Block scope (only inside `if`)
//     const c = 30; // ✅ Block scope (only inside `if`)
//     console.log(a, b, c);  // 🔹 Output: 10 20 30
// }
// console.log(a, b, c);  //  🔹10 2 3
// Functional Scope (var let const)
//function tricky() {
//     if (true) {
//         var x = 10;
//         let y = 20;
//         const z = 30;
//     }
//     console.log(x);  10
//     console.log(y);  ReferenceError
//     console.log(z);  ReferenceError
// }
// tricky();
// Block Scope(var let const)
// {
//     var x = 10;  // ✅ `var` is global (ignores block)
//     let y = 20;  // ✅ `y` is block-scoped
//     const z = 30;  // ✅ `z` is block-scoped
// }
// console.log(x);  // ✅ Prints `10`
// console.log(y);  // ❌ ReferenceError (block-scoped `let`)
// console.log(z);  // ❌ ReferenceError (block-scoped `const`)
// var = hosited with undefined
// let,const = hosited with TDZ
// DataTypes
// console.log(typeof null);      // ✅ "object" (a known JavaScript mistake!)
// console.log(typeof NaN);       // ✅ "number" (NaN stands for "Not a Number" but is still a number type)
// console.log(typeof undefined); // ✅ "undefined" (this one is straightforward)
//console.log(typeof []);         // ✅ "object" (arrays are objects in JavaScript)
// console.log(typeof {});        // ✅ "object" (regular object)
// objects
// Object.freeze() => locks an object so you can't change, add, or remove its properties.
//                    But inside objects (nested ones) can still change. 🚀
// const obj = {
//   name: "Dinesh",
//   age: 25,
// };
// Object.freeze(obj);
// obj.age = 30;       // ❌ This will not work
// obj.city = "Delhi"; // ❌ This will not work
// // delete obj.name; // ❌ This will not work
// console.log(obj);   // { name: "Dinesh", age: 25 }
// shallow copy =>    A shallow copy copies the top-level properties of an object
// const obj = {
//   name: "Dinesh",
//   education: "Btech",
// };
// const example = obj;
// example.name = "Suresh";
// console.log(obj);"Suresh"
// console.log(example);"Suresh"
// deep copy        =>  different memory Location
// Object.assign()  =>  It copies properties from one or more objects into a target object.
//                      It can merge objects or update properties of an existing object.
//                      but does not change the orginal one
//  const obj = {
//   name: "Dinesh",
//   education: "Btech",
// };
// const ex = Object.assign({}, obj);
// ex.name = "Suresh";
// console.log(obj); // ("Dinesh");
// console.log(ex);// ("Suresh");
// for nested objectsed
// let nestedObject = {
//   name: "Dinesh",
//   age: 21,
//   skills: {
//     developer: "javascript",
//   },
// };
// let a = JSON.parse(JSON.stringify(nestedObject));
// a.skills.developer = "Java";
// console.log(nestedObject); javascipt
// console.log(a);  java
// Arrays
// 1-push
// Adds one or more elements to the end of an array.
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]
// 2. pop()
// Removes the last element from an array and returns it.
// let arr = [1, 2, 3];
// let lastElement = arr.pop();
// console.log(arr); // [1, 2]
// console.log(lastElement); // 3
// 3. shift()
// Removes the first element from an array and returns it.
// let arr = [1, 2, 3];
// let firstElement = arr.shift();
// console.log(arr); // [2, 3]
// console.log(firstElement); // 1
// 4. unshift()
// Adds one or more elements to the beginning of an array.
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3]
// 5. concat()
// Merges two or more arrays and returns a new array.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let merged = arr1.concat(arr2);
// console.log(merged); // [1, 2, 3, 4]
// 8. indexOf()
// Returns the first index of a specified element, or -1 if not found.
// let arr = [10, 20, 30, 40];
// console.log(arr.indexOf(30)); // 2
// console.log(arr.indexOf(50)); // -1
// 10. forEach()
// Executes a function for each array element.
// let arr = [1, 2, 3];
// arr.forEach(num =>
// console.log(num * 2));
// // Output: 2, 4, 6
// 11. map()
// Creates a new array with modified elements.
// let arr = [1, 2, 3];
// let doubled = arr.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]
// 12. filter()
// Returns a new array with elements that pass a test.
// const x = [2, 3, 4, 5, 6];
// let e = x.filter((num) => {
//     if (num > 4) {
//       console.log(num);
//     }
//   });
// 16. find()
// Returns the first element that satisfies a condition.
// const d = [1, 2, 3, 4, 5];
// d.find((num) => {
//   if (num > 4) {
//     console.log(num);
//   }
// });
// 17. findIndex()
// Returns the index of the first element that satisfies a condition.
// let arr = [10, 20, 30, 40];
// let index = arr.findIndex(num => num > 25);
// console.log(index); // 2
// 18. sort()
// Sorts an array in place (default: ascending order as strings).
// let d = [11, 2, 31, 4];
// d.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(d);
// reduces => which returns a single value
// let d = [10, 20, 30, 40];
// const e = d.reduce((acc, ele) => {
//   return acc + ele;
// });
// console.log(e);
// es+6 features
// 1. let & const
// Definition: let allows block-scoped variables, const prevents reassignment.
// Why? To fix issues with var's function-scoping.
// 2. Arrow Functions (=>)
// Definition: Shorter syntax for functions with implicit return.
// Why? To simplify function expressions.
// 3. Template Literals
// Why? To make string concatenation easier.
// 4. Default Parameters
// Why? To avoid manual default value checks.
// 5. Destructuring
// Definition: Extract values from arrays/objects easily.
// Why? To make variable assignment cleaner.
// 6. Spread &  (...)
// Definition: Spread expands arrays/objects, Rest collects values.
// Why? To make array manipulation easier.
// let a = {
//     name: "Dinesh",
//     class: 12,
//     study: "btecj",
//   };
//   let b = {
//     ...a,
//     study: "bcom",
//   };
//   console.log(a);
//   console.log(b);
// Rest
//   function sum(name, ...collection) {
//     console.log(name);
//     console.log(collection);
//   }
//   sum("sai", "dinesh", "kumar");
// 9. for...of Loop
// Definition: Iterates over array values directly.
// Why? To provide a simpler loop alternative.
// 10. Promises
// Definition: Handles asynchronous operations cleanly.

// function

// 1. Function Declaration
// Definition: A named function defined using the function keyword.
// Hoisting: Fully hoisted (can be called before declaration).
// 2.  function  Expression
// Definition: A function assigned to a variable.
// Hoisting: Not hoisted
// 3. Anonymous Function Expression
// Definition: A function without a name, assigned to a variable or passed as a callback.
// Hoisting: Not hoisted
// 4. Arrow Function
// Definition: A shorter syntax for functions that inherit the this value from their surrounding context.
// Hoisting: Not hoisted
// 5. Immediately Invoked Function Expression (IIFE)
// Definition: A function that is defined and executed immediately.
// Hoisting: Not hoisted
// function Currying => Function currying was introduced to enable the reuse of functions with partial arguments.
//                      It is a technique where a function that takes multiple arguments is converted into a sequence of
//                      functions that each take one argument at a time.
//   reuseability

// function functionCurrying(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
// console.log(functionCurrying(2)(6)(1));

// infinite Curring

// function infiniteCurring(a) {
//   return function (b) {
//     if (b) return infiniteCurring(a + b);
//     return a;
//   };
// }
// console.log(infiniteCurring(2)(2)(4)(5)(6));
// console.log(infiniteCurring(2));

//  Synchronous  => in JavaScript means that tasks are executed one after another, in a specific order
// console.log("hii");
// console.log("dinesh");
// console.log("how are you");
// Asynchronous => program can start a task and move on to the next one without waiting for the first task to finish.
// 1 - Call Backs
// let stocket = {
//   fruits: ["Apple", "Banana", "Grapess"],
//   liquids: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["cholates", "peanuts"],
// };
// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocket.fruits[fruit_name]} was Selected`);
//     call_production();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("the production Started");
//     setTimeout(() => {
//       console.log(
//         `${stocket.liquids[0]} was Seclected`,
//         `${stocket.liquids[1]} was Seclected`
//       );
//       setTimeout(() => {
//         console.log(`Start the mechine`);
//         setTimeout(() => {
//           console.log(`${stocket.holder[1]} was Seclected`);
//           setTimeout(() => {
//             console.log(`${stocket.toppings[0]} was for toppings`);
//             setTimeout(() => {
//               console.log("ice cream was ready");
//             }, 2000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 1000);
// };
// order(0, production);
// 2-promises
// const PromiseExample = new Promise((resolve, rejected) => {
//   return resolve("Dinesh Come to Home");
// });
// const p2 = PromiseExample.then((data) => {
//   console.log(data);
//   return new Promise((resolve, rejected) => {
//     return resolve("open Gate and Close Gate");
//   });
// });
// const p3 = p2.then((data2) => {
//   console.log(data2);
//   return new Promise((resolve, rejected) => {
//     return resolve("Go and Sleep");
//   });
// });
// p3.then((data3) => {
//   console.log(data3);
// });
// async / await
//  1- fetch
// const sample = async () => {
//   const apiData = await fetch("www.google.com");
//   const convertingData = await apiData.json();
//   console.log(convertingData);
// };
// sample();
// 2 - axios
// const sample2 = async () => {
//   const data2 = await axios.get("url");
//   const dataStore = data2.data;
//   console.log(dataStore);
// };
// Event Loop  => The event loop in JavaScript is a process that allows the JavaScript engine to handle asynchronous tasks, like timers or user interactions,
//                 without blocking the main program flow. It constantly checks if the call stack is empty and, if so, moves tasks from the callback queue to the call stack for execution.
//                This helps JavaScript perform multiple tasks efficiently on a single thread.
// console.log("Start");
// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);
// console.log("End");
// "Start" is logged first, as it's synchronous.
// setTimeout is called, but the callback (() => { console.log("Inside setTimeout"); }) is added to the callback queue.
// "End" is logged next, because setTimeout is asynchronous, and JavaScript doesn't wait for it to complete.
// Once the call stack is empty, the event loop picks the callback from the callback queue and pushes it to the call stack.
// "Inside setTimeout" is logged last.
// this keyword
// Global scope
// console.log(this); // `this` refers to the global object (window in browsers)
// const obj = {
//   name: "John",
//   greet: function() {
//     console.log(this.name); // `this` refers to `obj`
//   }
// };
// obj.greet(); // Output: John
// 1. call,apply,bind;
// let obj = {
//   name: "Dinesh",
// };
// function sayname(age, cources) {
//   return "hello" + " " + this.name + " " + age + " " + cources;
// }
// console.log(sayname.call(obj, 21, "developer")); //hello Dinesh 21 developer
// console.log(sayname.apply(obj, [21, "developer"])); //hello Dinesh 21 developer
// const d = sayname.bind(obj);
// console.log(d(21, "devloper"));
// console.log(sayname.apply(obj, [21, "developer"]));
// higher order function
// const welcome = (a) => {
//   setTimeout(() => {
//     console.log("Welcome ");
//     a();
//   }, 2000);
// };
// const Login = (b) => {
//   setTimeout(() => {
//     console.log("please login in");
//     b();
//   }, 5000);
// };
// const thanku = () => {
//   setTimeout(() => {
//     console.log("thanku ");
//   }, 1000);
// };
// welcome(function () {
//   Login(function () {
//     thanku();
//   });
// });
