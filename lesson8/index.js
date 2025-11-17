// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 9];
// const arr3 = [15, 19, 27];

// function compilateArr(arr1, arr2, arr3) {
//     //const combinedArray = arr1.concat(arr2, arr3).sort((a, b) => b - a);
//     const combinedArray = [...arr1, ...arr2, ...arr3].sort((a, b) => b - a);

//     const strComma = combinedArray.join(" ");
//     return strComma;
//     // let strWioutComma = strComma.replace(/,/g, " ");
//     // {
//     //     return strWioutComma;
//     // }
// }

// const result = compilateArr(arr1, arr2, arr3);
// console.log(result);

// const usersList = [
//     {
//         id: 3,
//         name: "Sergey",
//     },
//     {
//         id: 1,
//         name: "Ilya",
//     },
//     {
//         id: 2,
//         name: "Darya",
//     },
// ];
//console.log(usersList.sort((a, b) => a.id - b.id));
// console.log(usersList.sort((a, b) => (a.name > b.name ? 1 : -1)));

//this

// "use strict";
// function showThis() {
//     console.log(this);
// }

// const showThis = () => {
//     console.log(this);
// };

// // showThis();

// const user = {
//     name: "Sergey",
//     showThis: showThis,
// };
// user.showThis();

// function showName(message) {
//     console.log(`${message}, ${this.name}`);
// }

// const admin = {
//     name: "Ivan",
//     showName,
// };

// const manager = {
//     name: "Svetlana",
//     showName,
// };

// const user = {
//     name: "Vasya",
//     showName,
// };

// showName.call(manager, "Привет");
// showName.apply(manager, ["Привет"]);

// const showManagerName = showName.bind(manager);
// showManagerName("Hello");

// const showManagerName = showName.bind(manager, "Hello");
// showManagerName();

// const showAdminName = showName.bind(admin);

// showAdminName();
// admin.showName();

//setTimeout(admin.showName.bind(manager), 1000);

// setTimeout(() => {
//     admin.showName();
// }, 1000);

// const dog = {
//     name: "Sharik",
//     sayName() {
//         console.log(this.name);
//     },
// };

// const dog2 = {
//     name: "Barbos",
// };

// const sayNameDog2 = dog.sayName.bind(dog2);
// sayNameDog2();

// dog.sayName.apply(dog2);

// dog.sayName();

// const city = {
//     cityName: "NN",
//     population: 1300000,
//     getCityName() {
//         return this.cityName;
//     },
//     getPopulation() {
//         return this.population;
//     },
//     setValue(key, value) {
//         this[key] = value;
//     },
// };

// city.setValue("cityName", "Minsk");
// console.log(city);

// function setValue(key, value) {
//     this[key] = value;
// }

// const dz = {
//     name: "Dzerjinsk",
//     people: "200 000",
//     getName() {
//         console.log(this.name);
//     },
//     getPeople() {
//         console.log(this.people);
//     },
//     setValue(key, value) {
//         this[key] = value;
//     },
// };

// const city = {
//     name: "NN",
//     people: "2 000 000",
// };

// dz.getName.apply(city);

// const setCityValue = dz.setValue.bind(city);

// setCityValue("age", 800);
// // dz.setValue("name", "NN");
// console.log(city);

// const createCounter = () => {
//     let count = 0;
//     return () => {
//         console.log(count++);
//     };
// };

// const counter = createCounter();
// const counter2 = createCounter();
// counter();
// counter();
// counter();
// counter2();
// counter2();
// counter();

// function example(closure = 100) {
//     // let ;
//     return function (b) {
//         return closure + b;
//     };
// }
// // let closure = 100;
// const foo = example(-500);

// // const foo = example(200);
// console.log(foo(5));

// const getV = () => {
//     const h = 10;
//     return (l, w) => h * l * w;
// };

// const calculateV = getV();

// console.log(calculateV(2, 5));

const carry = (a = 10) => {
    carry.isCalled = true;
    return (b = 3) => {
        return (c = 2) => {
            return a + b + c;
        };
    };
};

console.log(carry.isCalled);

console.log(carry()()());
console.log(carry.isCalled);

// console.log(carry(10, 5, 5));
