import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import { Container, Row } from '../components/Grid/index';
import Card from '../components/Card';
import Form from '../components/Form';
import BookList from '../components/BookList';
import API from '../utils/API';

function Search() {
    
    const [q, setQ] = useState('');
    const [books, setBooks] = useState({
        books: []
    });
    const [msg, setMSG] = useState('Search for a book on Google Books!')

    const getBookList = (q) => {
        API.getBooksAPI(q)
      .then(res => setBooks(res.data))
      .catch(() =>
        errSet()
      )
    };

    const errSet = () => {
        setBooks([]);
        setMSG('No books found with that title, try a different title!');
    };

    const handleSave = (id) => {
        const savedBook = books.find(book => book.id === id);

        API.saveBookDB({
        title: savedBook.volumeInfo.title,
        subtitle: savedBook.volumeInfo.subtitle,
        authors: savedBook.volumeInfo.authors,
        link: savedBook.volumeInfo.infoLink,
        description: savedBook.volumeInfo.description,
        image: savedBook.volumeInfo.imageLinks.thumbnail,
        googleId: savedBook.id
        })
        .then(() => getBookList());
    };

    const handleInput = (e) => {
        const { value } = e.target;
        setQ(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getBookList(q)
    };

    return(
        <div>
            <Container fluid >
                <Row fluid>
                    <Jumbotron />
                </Row>
                <Row fluid>
                    <Card>
                        <Form
                        q={q}
                        handleInput={handleInput}
                        handleSubmit={handleSubmit}
                         />
                    </Card>
                </Row>
                <Row fluid mt4>
                    {books.length ? (
                        <ul className='list-group'>
                            {books.map(book => (
                                <Card mt4>
                                    <BookList
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    subtitle={book.volumeInfo.subtitle}
                                    authors={book.volumeInfo.authors.join(', ')}
                                    description={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.infoLink}
                                    Button={() => (
                                        <button
                                          onClick={() => handleSave(book.id)}
                                          className='btn btn-primary ml-2'
                                        >
                                          Save
                                        </button>
                                      )}
                                    />
                                </Card>
                            ))}
                        </ul>
                        ) : (
                            <h1 className='text-center'>{msg}</h1>
                        )}                 
                </Row>
            </Container>
        </div>
    )
}

export default Search;