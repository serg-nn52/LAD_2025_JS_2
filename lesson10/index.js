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

const square = squaresList[0];

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

const input = document.createElement("input");
const button = document.createElement("button");
const toDoList = document.createElement("ul");
const li1 = document.createElement("li");

input.type = "text";
input.placeholder = "Введите текст...";
input.classList.add("my-input");
input.name = "input";

button.innerText = "Send";

li1.innerText = "ToDo1";

document.body.append(input);
document.body.append(button);
document.body.append(toDoList);
toDoList.append(li1);
