import { addBook } from './modules/localstorage.js';
import {
  displayBooks, addBookToList, deleteBook, clearFields,
} from './modules/add-remove.js';
import { displayList, displayAdd, displayContact } from './modules/display.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

document.addEventListener('DOMContentLoaded', displayBooks);
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  addBookToList(book);
  addBook(book);
  clearFields();
});

document.querySelector('.book-list').addEventListener('click', (e) => {
  deleteBook(e.target);
});

document.querySelector('.displayList').addEventListener('click', () => {
  displayList();
});

document.querySelector('.displayAdd').addEventListener('click', () => {
  displayAdd();
});

document.querySelector('.displayContact').addEventListener('click', () => {
  displayContact();
});
