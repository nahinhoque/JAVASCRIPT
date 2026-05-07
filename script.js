// let result = prompt("The no: ");
// console.log(result);

// let i = 0;
// do {
//     i += 1;
//     console.log(i);
// } while (i < 5);

// let n = 0;
// let x = 0;
// while (n < 3) {
//     n++;
//     x += n;
// }

// console.log(n);
// console.log(x);

// let i = 3;

// while (i) {
//     alert(i--);
// }
// console.log(i);

// let a = "1";
// let b = 0;

// switch (+a) {
//     case b + 1:
//         alert("this runs, because +a is 1, exactly equals b+1");
//         break;

//     default:
//         alert("this doesn't run");
// }

// for (let i = 0; i <= 50; i++) {
//     console.log("Hello World");
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.filter(num => num % 2 === 0);
// console.log(result);

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }
// }
// function sum(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3];
// let numbers2 = [4, 5, 6];

// let numbers3 = [...numbers, ...numbers2];
// console.log(numbers3);

// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// console.log(obj);

// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable
// console.log(array)

// function myFunction(x, y, z) { }
// const args = [0, 1, 2];
// console.log(args)
// myFunction(...args);


// function greetMsg(){
//     return "Hi";
// }
// console.log(greetMsg());

// const names = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// // console.log(names.forEach((name) => `Hi, ${name}`));
// // names.forEach((name) => console.log(`Hi, ${name}`));
// names.map((name) => console.log(name.length));

// const numbers = [1, 2, 3];

// const doubled = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubled); // [2, 4, 6]

// function bob(a) {
//     return a + 100;
// }
// const bobb = bob(5);
// console.log(bobb);


// const add = ((a, b) => a + b);
// console.log(add(5, 5));


// const add2 = ((x, y) => {
//     return x + y;
//     console.log(add2(2, 5));

// })
// let a = 3;
// const add3 = (b) => {
//     return (a += b);

//     // No return sta    tement, so returns undefined
// };
// console.log(add3(5));
// const a = (a, b) => a + b;
// console.log(a(5, 6));

// function multiply(a, b = 1) {
//     return a * b;
// }

// console.log(multiply(5, 2));
// // Expected output: 10

// console.log(multiply(5));
// // Expected output: 5

// (function () {
//     console.log("Helllo");

// })();

// function recouse(n) {
//     if (n == 0) return 1;
//     return n * recouse(n - 1);
// }
// console.log(recouse(5));

// const factorial = (n) => {
//     if (n == 0) return 1;
//     return n * factorial(n - 1);

// };
// console.log(factorial(4));


// function fibon(n) {
//     if (n <= 1) return n;
//     return fibon(n - 1) + fibon(n - 2);
// }

// console.log(fibon(4));

// function countdown(n) {
//     if (n <= 0) return;
//     console.log(n);
//     countdown(n - 1);

// }
// countdown(5);

// function notifyMe() {
//     console.log("Ding dong! Your pizza is here!");
// }
// function orderPizza(notifyMe) {
//     console.log("Pizza is being prepared...");

//     // We simulate a delay (like cooking time)
//     setTimeout(() => {
//         console.log("Pizza is ready!");
//         // This is the 'callback' being executed
//         notifyMe();
//     }, 3000);
// }

// orderPizza(notifyMe);


// // 1.Write a for loop using JavaScript, and it will show only even numbers between 1 and 20. Ex: 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// // 2)  Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

// // 3) Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed).
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([5, 9, 7, 5, 5, 6, 7]));

// function countdown(n) {
//     for (let i = n; i >= 0; i--) {
//         console.log(i);
//     }
// }
// countdown(5);
// const countdown = (n) => {
//     // 1. Base Case
//     if (n < 0) return;

//     console.log(n);

//     // 2. Recursive Step
//     countdown(n - 1);
// };

// countdown(5);
// // Output: 3, 2, 1, 0