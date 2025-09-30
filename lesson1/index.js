// console.log("Hi");

//1. let
let userName = "Sergey";
// let userName;
//some code
userName = "Ivan";

userName = 7;

console.log(userName);

//2. const

const isAdmin = true;

//3. var

var age = 25;

console.log(age);

//4 - не нужно
a = 10;

console.log(a);

//типы данных
//1. number

const userAge = 20;
let peopleCount = 10;
const pi = 3.14;

console.log(peopleCount / 0); //Infinity
console.log(-peopleCount / 0); //-Infinity
console.log("test" / 10); //NaN

//2. string

let adminName = "Ivan"; //одинарные кавычки
adminName = "Sergey"; //двойные кавычки
adminName = `Ilya ${userAge}`; //обратные кавычки

console.log(adminName);

//3. boolean

const isSuperAdmin = true;
const hasTail = false;

//4. null

const apples = null;

console.log(apples);

//5. undefined

let car;

console.log(car);

// 6. symbol

const id = Symbol("id");
const id2 = Symbol("id");

console.log(id);

// 7. bigint /

const bigData = 1152921504606846976n; //1152921504606846976

console.log(bigData);

// 8. object

const user = {
    name: "Sergey",
    age: 30,
};

user.age = 31;

user.car = "BMW";

//обращение через точку
console.log(user.name);

//обращение через динамический ключ
const key = "age";
console.log(user[key]);

//массив

const articles = [
    "О кошках",
    "О природе",
    "О собаках",
    "О собаках",
];

console.log(articles[0]);

// console.log(typeof(articles));
console.log(typeof articles);

articles.push("О людях");

articles[100] = "Супер последняя статья"; //нехорошо

articles.car = "Audi"; //нехорошо

console.log(typeof id);
console.log(typeof null); //object, особенность
console.log(typeof console.log); //function - но это объект

console.log(typeof (null + "test"), null + "test");
console.log(typeof null + "test", null + "test");
//
