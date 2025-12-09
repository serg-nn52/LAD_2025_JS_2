// console.log("Ok!");

// const error = new Error("Наша ошибка!");
// console.log(error.name);
// console.log(error.message);

// try {

// try {
//     console.log("before error");
//     // throw new Error("Наша ошибка!");
//     Promise.reject("Reject!");
// } catch (err) {
//     console.log("Возникла ошибка!", err);
// }
// console.log("after error");
// }

// fetch("https://reqres.in/api/users", {
//     headers: {
//         "x-api-key": "YOUR_API_KEY",
//     },
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// let posts;

// 1.
// const getPostsButton = document.querySelector(".get-posts");

// const onFetchPosts = () => {
//     const response = fetch("https://jsonplaceholder.typicode.com/posts");

//     response
//         .then((data) => {
//             console.log(data);
//             return data.json();
//         })
//         .then((data) => {
//             console.log(data);
//             posts = data;
//             if (data?.pressed) {
//             }
//         })
//         .catch((err) => console.log("Запрос не удался!"))
//         .finally(() => {
//             console.log("finally");
//         });
// };
// console.log(response);
// getPostsButton.addEventListener("click", onFetchPosts);
// onFetchPosts();
// setInterval(onFetchPosts, 5000);

const getPostsButton = document.querySelector(".get-posts");
const loader = document.querySelector(".loading");
const postsList = document.querySelector(".posts");

const createElement = (text) => {
    const li = document.createElement("li");
    li.innerText = text;
    postsList.append(li);
};

const onFetchPosts = async () => {
    loader.style.display = "block";
    postsList.innerHTML = "";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        posts.forEach((post) => {
            createElement(post.title);
        });
    } catch (err) {
        console.error(err);
        createElement("Не удалось загрузить список!");
        document.querySelector("li").style.color = "red";
    } finally {
        loader.style.display = "none";
    }
};
// onFetchPosts();
// getPostsButton.addEventListener("click", onFetchPosts);

const userForm = document.querySelector("#user-form");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");

const onSendUser = async () => {
    const payload = {
        login: loginInput.value,
        password: passwordInput.value,
    };
    loader.style.display = "block";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                Authorization: "qwfsxfghfytyr5w43243tyrfghgfsdf",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    } finally {
        loader.style.display = "none";
    }
};

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    onSendUser();
});

const dictionary = new Map([
    ["err1", "Не авторизован!"],
    ["err2", "Данные не найдены!"],
]);

dictionary.set("err3", "Ошибка сети!");

console.log(dictionary.get("err1"));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.entries());

const uniqValues = new Set([1, 2, 3, 5, 2, "apple", "banana", "apple"]);
uniqValues.add(100);
uniqValues.add(5);
console.log([...uniqValues]);
