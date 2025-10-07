//явное преобразование к строке
// console.log(String(false), typeof String(false));
// console.log(String(99), typeof String(99));
// console.log(String(NaN), typeof String(NaN));
// console.log(String(null), typeof String(null));
// console.log(String(undefined), typeof String(undefined));

// const user = {
//     userName: "Sergey",
// };

// console.log(String(user), typeof String(user));

// const array = [1, 2, 3, 4, 5];

// console.log(String(array), typeof String(array));

//явное преобразование к числу

// console.log(Number(undefined), typeof Number(undefined));
// console.log(Number(null), typeof Number(null));
// console.log(Number("    33    "), typeof Number("    33    "));
// console.log(Number("    33px    "), typeof Number("    33px    "));
// console.log(Number.parseInt("33px"));
// console.log(Number(true), typeof Number(true));
// console.log(Number(false), typeof Number(false));

// //краткая запись
// console.log(+"  45 ", typeof +"  45  ");
// console.log(+null, typeof +null);

//явное преобразование к Boolean

// console.log(Boolean("+"), typeof Boolean("+"));
// console.log(Boolean(" "), typeof Boolean(" "));
// console.log(Boolean(""), typeof Boolean(""));
// console.log(Boolean(0), typeof Boolean(0));
// console.log(Boolean(100), typeof Boolean(100));
// console.log(Boolean(NaN), typeof Boolean(NaN));
// console.log(Boolean(null), typeof Boolean(null));
// console.log(Boolean(undefined), typeof Boolean(undefined));

// //короткая запись

// console.log(!!1, typeof !!1);
// console.log(!!"", typeof !!"");

// Математические операции
// console.log(3 + 5);
// console.log(5 % 2);
// console.log(2 ** 3);
// console.log(2 + 5);

// console.log("78" == 78); //true
// console.log("78" === 78); //false

// console.log(false === 0);

// console.log("круг" === "круг");
// console.log("круг" === "круглый");
// console.log("круг" < "круглый");
// console.log("Круг" < "круг");
// console.log("а" < "я");

// console.log("а" > "Я");
// console.log("а " > "a");

// console.log(null == undefined);
// console.log(null == 0);
// console.log(NaN === NaN);
// console.log(Number.isNaN(NaN));

//бинарный плюс со строкой
// console.log("45" + 5);
// console.log(45 + "px");
// console.log(45 + true);
// console.log(45 + "true");
// console.log(45 / 5 + "2");

console.log("2" > "12");
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(undefined + 1); //NaN
