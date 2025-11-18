// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: "Вася",
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };
// askPassword(
//     () => user.loginOk(),
//     () => user.loginFail(),
// ); //вот так работает т.е. нужно передать функции в контексте объекта user

// function createTimer(start, end) {
//     let current = start;

//     return function () {
//         if (current >= end) {
//             console.log(current);
//             current--;
//             return current + 1; //
//         } else {
//             console.log("ВРЕМЯ!");
//             return null;
//         }
//     };
// }

// const timer = createTimer(10, 0);
// timer();

// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "Вася",

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };

// askPassword(user.loginOk, user.loginFail);

const animal = {
    isTail: true,
};

// const dog = {
//     name: "Sharik",
// };

//1.
// const dog = Object.create(animal);
// dog.name = "Sharik";

//2.

// const dog = {
//     name: "Sharik",
//     __proto__: animal,
// };
// dog.__proto__ = animal;

// console.log(dog.isTail);
// console.log(animal.__proto__.__proto__);
// for (let key in dog) {
//     console.log(key);
// }
// console.log(Object.keys(dog));

function CreateUser(name, age) {
    this.name = name;
    this.age = age;
    // this.sayHi = function () {
    //     console.log("Меня зовут: " + this.name);
    // };
}

// CreateUser.prototype.sayHi = function () {
//     console.log("Меня зовут: " + this.name);
// };

// const user1 = new CreateUser("Ivan", 25);
// const user2 = new CreateUser("Masha", 21);

// // user1.car = "Audi";
// console.log(user1);
// console.log(user2);

// user1.sayHi();

// console.log(user1.__proto__ === CreateUser.prototype);

// function Postcard(from, to) {
//     this.from = from;
//     this.to = to;
// }

// Postcard.prototype.show = function () {
//     console.log(this.from, this.to);
// };

// const happy = new Postcard("Russia", "USA");

// console.log(happy);
// happy.show();
// Postcard.prototype.changeFrom = function (newFrom) {
//     this.from = newFrom;
// };

// happy.changeFrom("Belarus");
// console.log(happy);

// class Parent {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log("Меня зовут: " + this.name);
//     }
//     static sayHello() {
//         console.log("Меня зовут: " + this.name);
//     }
//     static showAge() {
//         console.log("Мой возраст: " + this.age);
//     }
//     static showThis() {
//         console.log("Мой this: " + this);
//     }
// }

// class Child extends Parent {
//     constructor(name, age, city) {
//         super(name, age);
//         this.city = city;
//     }
// }

// const user = new Parent("Sergey");
// console.log(user);
// Parent.sayHello();
// Parent.showAge();
// Parent.showThis();

// const child = new Child("Ivan", 30, "NN");

// console.log(child);
// child.sayHi();
// Child.showThis();

// class User {
//     get name() {
//         console.log("Пытались получить информацию");
//         return this._name + " пользователь";
//     }
//     set name(value) {
//         if (value.length < 3) {
//             console.log("Имя слишком короткое!");
//             return;
//         }
//         this._name = value;
//         console.log(`Имя ${this._name} успешно установлено!`);
//     }
// }

// const user = new User();
// // user.name = "Sergey";
// console.log(user.name);

class People {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // age(value) {
    //     if (value < 18) {
    //         console.log("Пользователю мало лет");
    //         return;
    //     }
    //     this._age = value;
    // }
    get age() {
        console.log("Доступ к ПД, юзер id...");
        return this._age;
    }
    set age(value) {
        if (value < 18) {
            alert("Пользователю мало лет");
            window.location.href = "https://yandex.by";
            return;
        }
        this._age = value;
        alert("Доступ разрешен, возраст записан в БД");
    }
}

class Worker extends People {
    constructor(name, surname, rate, day) {
        super(name, surname);
        this.rate = rate;
        this.day = day;
    }
    getSalary() {
        return this.rate * this.day;
    }
}

const worker1 = new Worker("Ilya", "Morozov", 10000, 22);

// worker1.fullName = "ivan Ivanov";
// console.log(worker1.fullName);
// console.log(worker1.getSalary());
worker1.age = prompt("Введите ваш возраст!");
console.log(worker1.age);

localStorage.setItem("name", "Sergey");

console.log("ls", localStorage.getItem("name"));

const body = document.querySelector("body");
const nameBlock = document.createElement("h2");
nameBlock.style.color = "red";
nameBlock.innerText = localStorage.getItem("name");
body.appendChild(nameBlock);
