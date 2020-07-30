import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { Container, Row, Col } from '../components/Grid/index';
import Card from '../components/Card/Card';
import Form from '../components/Form/Form';
import BookList from '../components/BookList/BookList';
import API from '../utils/API';
import './PageStyles/PageStyles.css';

function Search() {
    
    const [q, setQ] = useState('');
    const [books, setBooks] = useState({
        books: []
    });
    const [msg, setMSG] = useState('Search for a book on Google Books!')

    const getBookList = (q) => {
        console.log(q)
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
        .then(() => getBookList(q));
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
                    <div className='d-flex justify-content-center animate__animated animate__fadeInUp'>
                        <Col size='lg-6'>
                            <Card>
                                <Form
                                q={q}
                                handleInput={handleInput}
                                handleSubmit={handleSubmit}
                                />
                            </Card>
                        </Col>
                    </div>
                </Row>
                <Row fluid mt4>
                    {books.length ? (
                        <ul className='list-group mx-5 mb-4 animate__animated animate__fadeInUp'>
                            {books.map(book => (
                                <Card 
                                mt4
                                key={book.id}
                                >
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
                                          className='resultsBtn mr-2 float-right'
                                        >
                                          Save
                                        </button>
                                      )}
                                    />
                                </Card>
                            ))}
                        </ul>
                        ) : (
                            <h1 className='text-center mb-3 mt-5 msg'>{msg}</h1>
                        )}                 
                </Row>
            </Container>
        </div>
    )
}

export default Search;