const Books = require('./Books');

const myBooks = new Books();
// Get a book by keyword
const bookByKeyword = myBooks.get_book_name('fiction');
setTimeout(()=> console.log('Book by keyword:', bookByKeyword), 3000)

// Get books by category
const booksByCategory = myBooks.get_book_categories('fantasy');
setTimeout(()=> console.log('Books by category:', booksByCategory), 3000)

// Get random books
const randomBooks = myBooks.get_random_books();
setTimeout(()=> console.log('Random books:', randomBooks), 3000)

// Search book by ID
const bookById = myBooks.search_book_volume('1234567890');
setTimeout(()=> console.log('Book by ID:', bookById), 3000)
  
