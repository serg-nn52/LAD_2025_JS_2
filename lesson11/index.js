// const createTimer = (start, end) => {
//     if (start <= end) {
//         throw new Error("Некорректные значения");
//     }
//     return (time = 1000) => {
//         let current = start;
//         const tick = () => {
//             console.log(current === end ? `Отсчет закончен, ${current}` : current);
//             current -= 1;
//         };

//         tick();
//         const intervalId = setInterval(() => {
//             if (current < end) {
//                 clearInterval(intervalId);
//                 return;
//             }
//             tick();
//         }, time);
//     };
// };

// // try {
// //     const timer = createTimer(5, 5);
// //     timer();
// // } catch (err) {
// //     alert(err);
// // }
// const timer = createTimer(5, 0);
// timer(100);

// console.log(navigator);

// const textBlock = document.getElementById("text");

// const textBlock = document.querySelector("#text");
// const list = [...document.querySelectorAll("li")];
const squaresList = document.querySelectorAll(".square");

// list[1].style.color = "red";

// console.log(squaresList[0].childNodes);

// square.innerHTML += "<a class='link' href='https://yandex.by'>Link</a>";
// square.innerText = "<a href='https://yandex.by'>Link</a>";
// square.outerHTML = "<div>Замена квадрата</div>";

const title = document.querySelector("h1");

// console.log([...square.classList]);

// title.style.color = "red";
// title.style.backgroundColor = "blue";

// title.classList.add("green");
// console.log(square.classList.contains("square111"));
// square.classList.remove("square");

// title.addEventListener("click", () => {
//     title.classList.toggle("green");
// });

// const showBlock = () => {
//     if (window.innerWidth < 1200) {
//         square.remove();
//     } else {
//         title.after(square);
//     }
//     console.log(window.innerWidth);
// };

// showBlock();
// window.addEventListener("resize", showBlock);

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//     window.removeEventListener("resize", showBlock);
// });
// window.addEventListener("beforeunload", () => {
//     window.removeEventListener("resize", showBlock);
// });
// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.textContent = "Circle";

// document.body.prepend(circle);
// document.body.append(circle);
// square.append(circle);
// square.before(circle);
// square.after(circle);

// const input = document.createElement("input");
// const button = document.createElement("button");
// const toDoList = document.createElement("ul");
// const li1 = document.createElement("li");

// input.type = "text";
// input.placeholder = "Введите текст...";
// input.classList.add("my-input");
// input.name = "input";

// button.innerText = "Send";

// li1.innerText = "ToDo1";

// document.body.append(input);
// document.body.append(button);
// document.body.append(toDoList);
// toDoList.append(li1);

// const square = squaresList[0];
// const child = document.querySelector(".children");

// document.body.addEventListener("click", () => {
//     console.log("click body");
// });

// square.addEventListener("click", () => {
//     console.log("click parent");
// });

// child.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("click child");
// });

// const form = document.querySelector("#test-form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("submit");
// });
// document.cookie = "name=Sergey; max-age=3600";
// console.log(document.cookie);

// localStorage.setItem("name", "Sergey");

// const user = {
//     name: "Sergey",
//     age: 40,
// };
// localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("isAdmin", JSON.stringify(true));

// console.log(JSON.parse(localStorage.getItem("user")));
// console.log(JSON.parse(localStorage.getItem("isAdmin")));
// console.log("key", localStorage.key(2));
// // localStorage.clear();
// localStorage.removeItem("isAdmin");
// // localStorage.setItem("user", "");
// console.log(localStorage);

// const promise = new Promise((resolve, reject) => {
//     resolve("Test data");
//     reject();
// });

// console.log(promise);

//1
// promise
//     .then((data) => {
//         console.log("Our data:", data);
//     })
//     .catch((err) => console.log("Возникла ошибка!"))
//     .finally(() => {
//         console.log("finally");
//     });

//2
// let isLoading = false;
// const getData = async () => {
//     isLoading = true;
//     try {
//         const data = await promise;
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         isLoading = false;
//         console.log("finally");
//     }
// };

// getData();

// const delay = async (time = 1000) => {
//     return new Promise((res, rej) => {
//         setTimeout(res, time);
//     });
// };

// const sayHi = async () => {
//     await delay(5000);
//     console.log("Hello!");
// };

// sayHi();

let isLoading = false;

const fetchPosts = async () => {
    isLoading = true;
    try {
        const res = await fetch("https://jsonplaceholde1r.typicode.com/posts");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Ошибка");
    } finally {
        isLoading = false;
    }
};

fetchPosts();
