const myLibrary = [];
function Book(id, title, author, pages) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(myLibrary.length, title, author, pages);
  myLibrary.push(newBook);
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 360);
addBookToLibrary("Harry Potter", "J.K. Rowling", 360);
addBookToLibrary("Harry Potter", "J.K. Rowling", 360);

const libraryDiv = document.querySelector(".library");
addBookToPage();
const openModal = document.querySelector(".open-modal");
const modal = document.querySelector("#modal");
const confirmBook = modal.querySelector(".confirm-modal");

const titleField = modal.querySelector("#title");
const authorField = modal.querySelector("#author");
const pagesField = modal.querySelector("#pages");

openModal.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener("close", (e) => {
  console.log(modal.returnValue);
});

confirmBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(titleField.value, authorField.value, pagesField.value);
  addBookToPage();
  modal.close();
});

function addBookToPage() {
  killChildren(libraryDiv);
  for (const book of myLibrary) {
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
    card.appendChild(titleEl);
    card.appendChild(authorEl);
    card.appendChild(pagesEl);
    card.appendChild(isReadEl);
    card.append;
    libraryDiv.appendChild(card);
  }
}

function killChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}
