// const value = +prompt("Введите значение", 0);

// const a = value === 0 ? true : false;

// alert(`Переменная a: ${a}`);

//test, true

// const test = false;
// console.log(!test ? "Верно" : "Неверно");

// const test = 0;

// if (test === 0) {
//     console.log("Верно!");
// } else {
//     console.log("Неверно!");
// }

//  console.log(5>==10)

// month = 4;
// month = 8;
// month = 10;
// let season;
// if (typeof month !== "number") {
//     console.log("Введите числовое значение!");
// } else if (month === 12 || month === 1 || month === 2) {
//     season = "зима";
// } else if (month >= 3 && month <= 5) {
//     season = "весна";
// } else if (month >= 6 && month <= 8) {
//     season = "лето";
// } else season = "осень";

// console.log(season);

// ?? <==> ||

//console.log(null || undefined || false || NaN || "banana" || "");

//console.log(("123" && null) ?? undefined ?? "" ?? ("banana" && ""));

// ??=

// let a = 5;

// a ??= 10;
// console.log(a);

//1. Function declaration

// function sayHi() {
//     console.log("Hello, function!");
// }

// sayHi();

// function sayHi(word = "Hi", name = "Unknown user") {
//     console.log(`${word}, ${name}!`);
// }

// //sayHi("Даша", "Салют", "Осень");

// sayHi("Привет", "Лина");

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(2, 4);

// function getName() {
//     return "Sergey";
// }

// function sayHi(text, name = getName()) {
//     console.log(`${text} ${name}`);
// }

// sayHi("Hello!");

//const userName = getName();
//console.log(userName);
//console.log(getName());

// function sum(a, b) {
//     return a + b;
// }
// sum();

// const result = sum(2, 3);
// console.log(result);

// function getRandomNumber() {
//     return Math.random();
// }
// console.log(getRandomNumber());
// function getRandomString() {
//     return;
// }

// function checkAge(age) {
//     if (age < 18) {
//         return;
//     }
//     console.log("Доступ разрешен");
//     console.log("Секретная информация");
// }
// checkAge(10);
// const message = "Привет, внешний друг!";
// sayHi("Hi!", 3, false);

// function sayHi(...args) {
//     // const message = `Привет, ${arguments[0]}!`;
//     // console.log(message);
//     console.log(args);
// }

// console.log(message);

// let userName = "Ivan";

// function changeUserName(name) {
//     userName = name;
// }

// changeUserName("Ilya");
// console.log(userName);

// function calculator(num, degree = 1) {
//     console.log(num ** degree);
// }

// calculator(2, 3);

// (function () {
//     console.log("Hi");
// })();

//2. Function expression

// const sayHi = function () {
//     console.log("Hi, user!");
// };

// const copiedSayHi = sayHi;

// console.log(copiedSayHi);

// const sum = function (a, b) {
//     return a + b;
// };

// const result = sum(5, 10);

// setTimeout(function () {
//     console.log("Hi, user!");
// }, 0);

// console.log("after set timer");

// const sum = (a = 10, b = 1) => {
//     // console.log(arguments);
//     // if (!a) {
//     //     console.log("Нет первого параметра!");
//     //     return;
//     // }
//     return a + b;
// };
// let _;
// const result = sum(_, 21);

// const sum = (a, b) => a + b;

// const result = sum(1, 2);
// console.log(result);

// const sayHi = userName => console.log(`Hi, ${userName}!`);
// sayHi('Sergey');

// setTimeout(() => {
//     console.log("Hi!");
// }, 3000);

// const repeatString = (str, n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(str);
//     }
// };

// repeatString("test", 1);

const checkVowel = (letter) => {
    if (letter === "а" || letter === "о") {
        return true;
    } else {
        return false;
    }
};

console.log(checkVowel("р"));
