const addBook = document.getElementById("add-book");
const dialog = document.getElementById("dialog");
const jsCloseBtn = document.querySelector("#js-close");
const submit = document.querySelector("#submit");
let title = document.getElementById("title");
let author = document.getElementById("Author");
let pages = document.getElementById("pages");
let info = document.getElementById("status");
let container = document.getElementById("container");

addBook.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

let myLibrary = []; 

class book {
  constructor(title, author, pages, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = info;
  }
}

//function book(title, author, pages, info) {
//      this.title = title;
//      this.author = author;
//      this.pages = pages;
//      this.info = info;

//};


function addToLibrary() {
  submit.addEventListener("click", (e)=> {
    e.preventDefault();
    let bookAdd = new book(title.value, author.value, pages.value, info.value);
    if(title.value.length === 0) {
      return alert("Fill out title")
    } else if (author.value.length === 0) {
      return alert ("Fill out Author")
    } else if (pages.value.length === 0 && info.value === "read"){
      return alert("fill out pages")
    }
    myLibrary.push(bookAdd);
    dialog.close();

    container.innerHTML ="";

    myLibrary.forEach((books, index) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");

      const header = document.createElement("h2");
      header.innerHTML = books.title 

      const ul = document.createElement("ul");
      const authorLi = document.createElement("li");
      authorLi.innerHTML = books.author 
      const pagesLi = document.createElement("li");
      pagesLi.innerHTML = books.pages

      ul.appendChild(authorLi);
      ul.appendChild(pagesLi);

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "delete";
      deleteButton.addEventListener("click", () => removeCard(index, cardContainer));

      cardContainer.appendChild(header);
      cardContainer.appendChild(ul);
      cardContainer.appendChild(deleteButton);

      container.appendChild(cardContainer);
      
      if(books.info === "read" ){
        cardContainer.style.backgroundColor = "green";
      } else if(books.info === "reading") {
        cardContainer.style.backgroundColor = "blue";
      } else if(books.info === "not-read") {
        cardContainer.style.backgroundColor = "red";
      }
    });
  });
};

function removeCard(index, cardContainer) {
  myLibrary.splice(index, 1);
  container.removeChild(cardContainer);
}


addToLibrary();

