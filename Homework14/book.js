// )Создайте класс Book со свойствами title, author и yearPublished. Добавьте статическое свойство, где будут сохранены все экземпляры Book.  Добавьте статический метод listAuthors, который возвращает массив со  всеми именами авторов.

class Book {
    static allBooks = [];
   
    

    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

        Book.allBooks.push(this);
    }
    

   static ListAuthors(){
    return Book.allBooks.map(book => book.author);
}
};
 const book1 = new Book ("Мертвые души", "Н.Гоголь", 1855);
 const book2 = new Book ("Барышня-крестьянка", "А.Пншкин", 1845 );
 const book3 = new Book ("Недросль", "Д.Фонвизин", 1783 );
 const book4 = new Book ("Как закалялась сталь", "Н.Островский", 1786 );
 const book5 = new Book ("Кактус", "А.Фет", 1881);
 const book6 = new Book ("В клетке зверя", "А.Куприн", 1912 );



 console.log(Book.ListAuthors());
 console.log(Book.allBooks);
 
 