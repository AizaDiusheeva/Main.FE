

function setObject(key, object) {
    
    localStorage.setItem(key, JSON.stringify(object));
}



function getObject(key) {
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}
 
 
 

let books = [];

function addbook (name, author, year, page) {
    const id = Date.now();
    const neewBook = {name, author, year, page };
    books.push(neewBook);
}

// console.log(Date.now());

const bookForm = document.querySelector("form");
const nameInput = document.querySelector("#bookName");
const authorInput = document.querySelector("#author");
const yearInput = document.querySelector("#bookYear");
const pageInput = document.querySelector("#bookPage");


bookForm.addEventListener("submit",  (e) => {
    e.preventDefault();
    const bookName = nameInput.value;
    const author = +authorInput.value;
    const bookYear = +yearInput.value;
    const bookPage = +pageInput.value;

    addbook(bookName, author,bookYear, bookPage);
    console.log(books);

    setObject("books", books);

    renderBooks();
    bookForm.reset();
    
}
);

const booksList = document.querySelector("#booksList");

function renderBooks(booksArray = books) {
    booksList.innerHTML = "";

    booksArray.forEach(book => {
        const item = document.createElement("li");
        item.innerText = `${book.name} - ${author}, ${book.year}, количество: ${book.page} `;
        booksList.append(item);
        
    });

}

const saveBooks = getObject("books");
if (saveBooks) {
    books = saveBooks;
    renderBooks();
}

// Кнопка для очистки списка книг
const clearBooksButton = document.querySelector("#clearBooks"); // Элемент кнопки очистки

clearBooksButton.addEventListener("click", () => {
    books = [];  // Очищаем массив книг
    setObject("books", books);  // Обновляем localStorage (сохраняем пустой массив)
    renderBooks();  // Перерисовываем список книг (сейчас он будет пуст)
});

// onchange oninput
// toLowerCase
// incLudes => true / false

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredBooks = books.filter((book) => 
        book.name.toLowerCase().includes(searchValue)
    );
    renderBooks(filteredBooks);

    console.log(searchInput);
    
});


// switch case

const sortSelect = document.querySelector("#sortSelect");
// ="bookName">
// "Author"
// "year"
// "countPage

sortSelect.addEventListener("change", () => {
    switch (sortSelect.value) {
        case "bookName":
            // Сортируем книги по названию
            books.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Author":
            // Сортируем книги по автору
            books.sort((a, b) => a.author.localeCompare(b.author));
            break;
        case "year":
            // Сортируем книги по году (числовая сортировка)
            books.sort((a, b) => a.year - b.year);
            break;
        case "countPage":
            // Сортируем книги по количеству страниц (числовая сортировка)
            books.sort((a, b) => a.page - b.page);
            break;
    }
    renderBooks();
});



