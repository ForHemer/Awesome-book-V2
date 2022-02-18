/* Single Page Application */
export default () => {
  const list = document.querySelector('.list');
  const addNew = document.querySelector('.addNew');
  const contact = document.querySelector('.contact');

  list.addEventListener('click', () => {
    const booksMain = document.getElementById('all-books');
    const addSection = document.getElementById('add-book');
    const contactSection = document.getElementById('contact');
    booksMain.classList.remove('hidden');
    contactSection.classList.add('hidden');
    addSection.classList.add('hidden');
  });

  addNew.addEventListener('click', () => {
    const booksMain = document.getElementById('all-books');
    const addSection = document.getElementById('add-book');
    const contactSection = document.getElementById('contact');
    booksMain.classList.add('hidden');
    contactSection.classList.add('hidden');
    addSection.classList.remove('hidden');
  });

  contact.addEventListener('click', () => {
    const booksMain = document.getElementById('all-books');
    const addSection = document.getElementById('add-book');
    const contactSection = document.getElementById('contact');
    booksMain.classList.add('hidden');
    contactSection.classList.remove('hidden');
    addSection.classList.add('hidden');
  });
};
