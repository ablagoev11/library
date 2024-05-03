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

const libraryDiv = document.querySelector(".library");

for (const book of myLibrary) {
  const card = document.createElement("div");
  card.classList.add("book");
  const titleEl = document.createElement("h2");
  titleEl.textContent = book.title;
  const authorEl = document.createElement("p");
  authorEl.textContent = book.author;
  const pagesEl = document.createElement("p");
  pagesEl.textContent = book.pages;
  card.appendChild(titleEl);
  card.appendChild(authorEl);
  card.appendChild(pagesEl);
  libraryDiv.appendChild(card);
}
