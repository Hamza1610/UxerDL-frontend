const { json } = require("react-router-dom");

class Books {

    // Book class providing methods for fetching books
    async get_book(keyword) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}`;
  
      const response = await fetch(url)
      if (response.ok) {
        const json = response.json()
        return json;
      }
      else {
        return 'Error fetching books'
      }
    }
  
    async get_book_categories(categories) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${categories}`;
  
      const response = await fetch(url)
      if (response.ok) {
        const json = response.json()
        return json;
      }
      else {
        return 'Error fetching books'
      }
    }
  
    async get_trending_books() {
      
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=*&orderBy=relevance`)
      if (response.ok) {
        const json = response.json()
        return json;
      }
      else {
        return 'Error fetching books'
      }
    }
  
    async get_latest_book() {
      const url = `https://www.googleapis.com/books/v1/volumes?q=fiction,nonfiction&orderBy=newest`;

      const response = await fetch(url)
      if (response.ok) {
        const json = response.json()
        return json;
      }
      else {
        return 'Error fetching books'
      }
    }
  }
  
  module.exports = Books;
  