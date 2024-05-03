const myLibrary = [];
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 360);
addBookToLibrary("Harry Potter", "J.K. Rowling", 360);
addBookToLibrary("Harry Potter", "J.K. Rowling", 360);

console.log(myLibrary);
