
const form = document.querySelector("form");

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    const formData = new FormData (form);
    const postData = {
        nickname: formData.get("nickname"),
        body: formData.get("body"),
        email: formData.get("email")

    }
fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log(data))  // Выводим ответ сервера в консоль
.catch(error => console.error('Ошибка:', error));
})
