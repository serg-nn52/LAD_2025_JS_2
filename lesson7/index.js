const arr = ["apple", 1, null, { name: "Sergey" }, []];
console.log(typeof arr);
console.log(Array.isArray(arr));

const arr1 = new Array();
const arr2 = [];

// console.log(arr1);
// console.log(arr2);
arr[0] = "banana";

arr.push("cherry");

console.log(arr.length, arr);
console.log(arr[3].name);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix[1][1]);

//arr.length = 2;
console.log(arr.toString());
console.log(String(arr));

//методы

//1. push
// arr.push("lemon");
// arr.push("apple");
// console.log(arr);
// console.log(arr.push("lemon"));
// console.log(arr);

//2. unshift

// arr.unshift("lemon");
// console.log(arr);

//3. pop

// arr.pop();
// console.log(arr);

//4. shift
// console.log(arr);
// arr.shift();
// console.log(arr);

// console.log(arr.indexOf(null));
// console.log(arr.includes("banana"));

const userList = [
    {
        id: 1,
        user: "Ivan",
    },
    {
        id: 2,
        user: "Sergey",
    },
    {
        id: 3,
        user: "Lina",
    },
    {
        id: 4,
        user: "Sergey",
    },
];

//console.log(userList.find((el) => el.user === "Sergey"));

// const filteredUserList = userList.filter((el, i) => el.user === "Sergey" && i === 1);
// console.log(filteredUserList);

// console.log(userList);

// console.log(userList.map((el, i) => el.user + `-manager-${i + 1}`));

// console.log(
//     userList.map((el, i) => {
//         if (i === 1) {
//             return { ...el, role: "manager" };
//         }
//         return el;
//     }),
// );

// userList.forEach((el) => console.log(el.user));

// userList.forEach((el) => el.id * 2);
// userList.forEach((el, i) => userList[i].id * 2);
// console.log(userList);

// const numbersList = [1, 2, 3, 4];
// const roleList = ["manager", "admin", "user"];
// const result = numbersList.reduce((acc, value) => acc + value, 0);

// console.log(result); //10
// console.log(roleList.reduce((acc, value) => acc + '-' + value), '')

// const sumEvenPositive = (arr) => {
//     const res = arr.reduce((sum, elem) => {
//         if (elem > 0 && elem % 2 === 0) {
//             return sum + elem;
//         }
//         return sum;
//     }, 0);
//     return res;
// };

// console.log(sumEvenPositive([1, -2, -3, 4, 5, -6, 2]));

// const createUniqValues = (arr) => {
//     const tempArr = [];
//     arr.forEach((el) => {
//         if (tempArr.includes(el)) {
//             return;
//         }
//         tempArr.push(el);
//     });
//     return tempArr;
// };

// console.log(createUniqValues([1, 2, 5, 2, 7, 4, 9, 7]));

// console.log({} === {});

// const myFunc = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// };

// console.log(myFunc([1, 2, 3, 2, 4, 4, 5, 6, 8], [1, 2, 3, 2, 4, 4, 5, 6]));

const user1 = {
    name: "Sergey",
    car: "BMW",
    age: "35",
    dog: {
        name: "Sharik",
    },
};

for (let elem in user1) {
    console.log(elem);
}

// const user3 = {
//     name: "Ivan",
//     city: "Moscow",
// };

//неглубокое копирование
//1
// const user2 = { ...user1, ...user3, country: "Russia", age: 18 };
// console.log(user2);
// user2.car = "Audi";
// user2.dog.name = "Pirat";
//2

//const user2 = Object.assign({}, user1);
// user2.car = "Audi";
// console.log(user1);

//глубокое копирование

//1.
// const user2 = JSON.parse(JSON.stringify(user1));
// user2.car = "Audi";
// user2.dog.name = "Pirat";
// console.log(user2);
//2.
// const user2 = structuredClone(user1);
// user2.car = "Audi";
// user2.dog.name = "Pirat";
// console.log(user1);

// const sum = (a, b, ...args) => {
//     console.log(args);
//     return a + b + args.reduce((acc, val) => acc + val, 0);
// };

// console.log(sum(3, 5, 10, 20));

// const nums = [1, 2];
// for (let num of nums) {
//     console.log(num * 10);
// }
