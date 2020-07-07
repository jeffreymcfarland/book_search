import axios from "axios";

export default {
  // Get books from the Google API
  getBooks: (q) => {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Get all saved books
  getSavedBooks: () => {
    return axios.get("/api/books");
  },
  // Delete a saved book with the given id
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
  // Save a book to the db
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  }
};