import Store from './store.js';
/* ==========Display books========== */
export default class displayBook {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => displayBook.addBookToList(book));
  }

  static addBookToList(book) {
    const newBook = document.querySelector('.table-item');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
              <td>"${book.title}"</td>
              <td> by ${book.author}</td>
              <td><button type="button" class="btn-remove">Remove</button></td>  
          `;
    newBook.appendChild(newRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('btn-remove')) {
      el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
