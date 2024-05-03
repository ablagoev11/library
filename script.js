const openModal = document.querySelector(".open-modal");
const modal = document.querySelector("#modal");
const confirmBook = modal.querySelector(".confirm-modal");
const titleField = modal.querySelector("#title");
const authorField = modal.querySelector("#author");
const pagesField = modal.querySelector("#pages");
const libraryDiv = document.querySelector(".library");

const myLibrary = [];
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 360);
addBookToLibrary("Harry Potter", "J.K. Rowling", 360);
addBookToLibrary("Harry Potter", "J.K. Rowling", 360);

for (const book of myLibrary) {
  addBookToPage(book);
}

function addBookToPage(book) {
  const card = document.createElement("div");
  card.classList.add("book");
  const titleEl = document.createElement("h2");
  titleEl.textContent = book.title;
  const authorEl = document.createElement("p");
  authorEl.textContent = book.author;
  const pagesEl = document.createElement("p");
  pagesEl.textContent = book.pages;
  const isReadEl = document.createElement("p");
  isReadEl.textContent = book.isRead ? "Book is read" : "Book is not read";
  const isReadButton = document.createElement("button");
  isReadButton.textContent = "Read book";
  const removeBookButton = document.createElement("button");
  removeBookButton.textContent = "Remove book";

  isReadButton.addEventListener("click", () => {
    book.isRead = true;
    isReadEl.textContent = book.isRead ? "Book is read" : "Book is not read";
  });

  removeBookButton.addEventListener("click", () => {
    libraryDiv.removeChild(card);
  });

  card.appendChild(titleEl);
  card.appendChild(authorEl);
  card.appendChild(pagesEl);
  card.appendChild(isReadEl);
  card.appendChild(isReadButton);
  card.appendChild(removeBookButton);

  card.append;
  libraryDiv.appendChild(card);
}

openModal.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener("close", () => {
  titleField.value = "";
  authorField.value = "";
  pagesField.value = "";
});

confirmBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(titleField.value, authorField.value, pagesField.value);
  addBookToPage(myLibrary[myLibrary.length - 1]);
  modal.close();
});
