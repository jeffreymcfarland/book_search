import axios from 'axios';

export default {
  // Get books from the Google API
  getBooksAPI: (q) => {
    return axios.get('/api/google', { params: { q: q } });
  },
  // Get all saved books
  getSavedBookDB: () => {
    return axios.get('/api/books');
  },
  // Delete a saved book with the given id
  deleteBookDB: (id) => {
    return axios.delete('/api/books/' + id);
  },
  // Save a book to the db
  saveBookDB: (bookData) => {
    return axios.post('/api/books', bookData);
  }
};