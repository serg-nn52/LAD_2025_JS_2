//1. object
// const user = {
//     name: "Sergey",
//     age: "40",
// sayName: () => {
//     console.log("Sergey");
// },
// sayName() {
//     console.log(this.name);
// },
// sayName: () => {
//     console.log(user.name);
// },
// };

// user.animal = "dog";
// user["user-role"] = "admin";

// delete user.age;

// console.log(user);

// //2. object

// const dog = Object.create(null);

// dog.name = "Sharik";
// console.log(dog);

// //3. object

// class Animals {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const cat = new Animals("cat");
// console.log(cat);
// user.name = "Ivan";
// user.sayName();

// const myFavoriteFilm = {
//     name: "«Рок-н-рольщик»",
//     year: "2008",
//     director: "Гай Ричи",
//     country: "Великобритания, США",
//     showFilmName() {
//         console.log(this.name);
//     },
// };

// myFavoriteFilm.budget = 100000000;
// myFavoriteFilm.showFilmName();
// delete myFavoriteFilm.year;
// console.log(myFavoriteFilm);

// let str = "Hello Ivan";
// console.log(str.toUpperCase()); // Выведет HELLO IVAN

// let number = 1.2345;
// console.log(+number.toFixed(2)); // Выведет 1.23
// console.log(parseFloat("200.5px")); // 200

// console.log(isNaN(NaN)); // true
// console.log(isNaN("str")); // true

// console.log(Number.isNaN("str")); //false
// console.log(Number.isNaN(NaN)); //true

// console.log(isFinite(999)); //true
// console.log(isFinite(999 / 0)); //false

// const age = undefined;

// console.log(String(age));

// const age = 18.4;
// //до ближ целого
// console.log(Math.round(age));
// //в большую сторону
// console.log(Math.ceil(age));
// // в меньшую сторону
// console.log(Math.floor(age));

// //toFixed

// console.log(+(3.45456456).toFixed(4));

// console.log(Math.max(10, 5, 45, 99, 150, 0));
// console.log(Math.min(10, 5, 45, 99, 150, 0, -5));

// const str = "test";
// str[0] = "a";
// console.log(str);

// console.log("\u00A9\n\t\\");
// console.log(`Ivan`.length); // 4

// console.log(`Ivan`[100]);
// console.log("  \t  Ivan   ".trim());
// console.log("z".codePointAt(0)); // 122
// console.log("Z".codePointAt(0)); // 90

// let str = "Widget with id";
// console.log(str.indexOf("id", 3));
// console.log(str.includes("id")); //true false

// console.log(str.slice(-5));
// console.log(str.substr(1, 5));
// console.log(str.substring(1, 5));

// const getRandomNumber = (start, end) => {
//     return Math.round(Math.random() * (end - start)) + start;
// };

// const result = getRandomNumber(1, 6);
// console.log(result);

// const checkCase = (string, n) => string[n] === string[n].toUpperCase();

// console.log(checkCase("Arnolder", 2));

// const substitution = function (str, find, replace) {
//     return str.slice(str.indexOf(find)) + replace;
// };

// const replaceAll = (str, find, replace) => {
//     // let tempStr = str;
//     // while (tempStr.includes(find)) {
//     //     tempStr = tempStr.replace(find, replace);
//     // }
//     // return tempStr;
//     // return str.replaceAll(find, replace);
//     const regexp = new RegExp(find, "gi");
//     return str.replace(regexp, replace);
// };

// let str = "Widget with ID";

// const result = replaceAll(str, "id", "$");
// console.log(result);
// console.log(+(0.1 + 0.2).toFixed(4) === 0.3);
