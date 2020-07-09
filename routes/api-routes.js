const db = require('../models');
const axios = require("axios");

module.exports = (app) => {

    // Routes for google api
    app.get('/api/google/', (req, res) => {
        axios
        .get("https://www.googleapis.com/books/v1/volumes", {params: req.query})
        .then((results) => 
            results.data.items.filter( result =>
                result.volumeInfo.title &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks &&
                result.volumeInfo.imageLinks.thumbnail
        ))
        .then(apiBooks =>
            db.Book.find().then(dbBooks =>
              apiBooks.filter(apiBook =>
                dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
        )))
        .then(books => res.json(books))
        .catch((err) => console.log(err))
    });

    app.get('/api/books', (req, res) => {
        db.Book.find(req.query)
        .then(book => res.json(book))
        .catch(err => console.log(err));
    });

    app.post('/api/books', (req, res) => {
        db.Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => console.log(err));
    });

    app.delete('/api/books/:id', (req, res) => {
        db.Book.findById(req.params.id)
        .then(book => book.remove())
        .then(book => res.json(book))
        .catch(err => console.log(err));
    })

};