// "use strict";
// console.log("Hello world!");

// const age = 17;

// if (age >= 18) {
//     const message = "Доступ разрешен!";
//     console.log(message);
//     //console.log(age);
// } else {
//     console.log("Доступ запрещен, разрешено с 18 лет!");
// }

// user = "Ivan";
// console.log(user);

// const age = 65;

// if (age < 18) {
//     console.log("Обратитесь в школу!");
// } else if (age < 60) {
//     console.log("Обратитесь в налоговую!");
// } else {
//     console.log("Идите в пенсионный фонд!");
// }

// const age = 16;

// const isSuccess = age >= 18 ? true : false;

// const authMessage = isSuccess ? "Доступ разрешен!" : "Доступ запрещен!";
// let authMessage;

// if (isSuccess) {
//     authMessage = "Доступ разрешен!";
// } else {
//     authMessage = "Доступ запрещен!";
// }

// console.log(authMessage);

// const country = "Russia";

// switch (country) {
//     case "Italy":
//         console.log("Итальянский язык!");
//         break;
//     case "Russia":
//         console.log("Русский язык!");
//         break;
//     case "Belarus":
//         console.log("Русский или белорусский язык");
//         break;
//     default:
//         console.log("Страна не распознана, общайтесь на международном (English)");
//         break;
// }

// const a = 2350;
// const b = 1500;
// const c = 1000;

// let max = a;

// // if (b > max) {
// //     max = b;
// // }
// max = b > max ? b : max;
// if (c > max) {
//     max = c;
// }

// console.log(max);

// const temp = 10;

// if (temp <= -30) {
//     console.log("Оставайтесь дома!");
// } else if (temp <= -10) {
//     console.log("Сегодня холодно!");
// } else if (temp <= 5) {
//     console.log("Не холодно!");
// } else if (temp <= 15) {
//     console.log("Тепло!");
// } else if (temp <= 25) {
//     console.log("Очень тепло!");
// } else if (temp <= 35) {
//     console.log("Жарко!");
// } else {
//     console.log("Пекло!");
// }

// const temp = -40;

// let message;

// if (temp <= -30) {
//     message = "Оставайтесь дома!";
// } else if (temp <= -10) {
//     message = "Сегодня холодно";
// } else if (temp <= 5) {
//     message = "Не холодно";
// } else if (temp <= 15) {
//     message = "Тепло";
// } else if (temp <= 25) {
//     message = "Очень тепло";
// } else if (temp <= 35) {
//     message = "Жарко";
// } else {
//     message = "Пекло!";
// }

// console.log(message);

// const role = "admin";

// switch (role) {
//     case "admin":
//         console.log("Можно все!");
//         break;
//     case "user":
//         console.log("Я простой сотрудник!");
//         break;
//     case "manager":
//         console.log("Могу продать все!");
//         break;
//     default:
//         console.log("Неопознанная роль!");
//         break;
// }

// const role = "user";

// switch (role) {
//     case "admin":
//         message = "полный доступ";
//         break;

//     case "manager":
//         message = "продажи";
//         break;

//     default:
//         message = "юзер обыкновенный";
//         break;
// }

// console.log(message);

//console.log("" || true || false);
//console.log("" || NaN || null || "Ivan" || false);
// console.log("" || NaN || null || false || undefined);

// console.log(false && true);
// console.log(true && false);
// console.log(true && "Ivan" && NaN && 1);
// console.log(true && "Ivan" && 1);

// console.log(!"Ivan");
// console.log(!0);
//console.log(!!"Ivan"); //Boolean('Ivan')
// const a = 3;
// console.log(2 == !a);

// console.log(0 || (true && "false") || null, typeof (0 || (true && "false") || null));
// console.log((0 && true) || ("false" && null));
// console.log(!0 && !!1);

// console.log(!(null || (!"апельсин" && true)));

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (true) {
//     i++;
//     if (i === 11) break;
//     if (i === 6) continue;
//     console.log(i - 1);
// }

outer: for (let i = 0; i < 3; i++) {
    console.log("outer-start");
    for (let j = 0; j < 3; j++) {
        console.log("inner");
        if (j === 0) break outer;
    }
    console.log("outer-end");
}
