import { getBooks } from './localstorage.js';

const addBookToList = (book) => {
  const list = document.querySelector('.book-list');
  const addedbook = document.createElement('tr');
  addedbook.innerHTML = `
      <td class="cols1">"${book.title}" by ${book.author}</td>
      <td class="cols2"><button type="submit" class="delete">Remove</button></td>
      `;
  list.appendChild(addedbook);
};

const displayBooks = () => {
  const books = getBooks();
  books.forEach((book) => addBookToList(book));
};

const deleteBook = (el) => {
  if (el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
  }
};

const clearFields = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
};

export { displayBooks, addBookToList, deleteBook, clearFields };