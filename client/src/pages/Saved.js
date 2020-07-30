import React, { useState, useEffect } from 'react';
import { Container, Row } from '../components/Grid/index';
import Card from '../components/Card/Card';
import SavedList from '../components/SavedList';
import API from '../utils/API';
import Jumbrotron from '../components/Jumbotron/Jumbotron';
import './PageStyles/PageStyles.css';

function Saved() {
    const [books, setBooks] = useState({
        books:[]
    });

    useEffect(() => {
        getSavedList()
    }, []);

    const getSavedList = () => {
        API.getSavedBookDB()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    };

    const handleDelete = id => {
        API.deleteBookDB(id)
            .then(() => getSavedList())
    };

    return(
        <div>
            <Container fluid>
                <Jumbrotron />
                <Row fluid>
                {books.length ? (
                        <ul className='list-group mx-5 mb-4 animate__animated animate__fadeInUp'>
                            {books.map(book => (
                                <Card mt4>
                                    <SavedList
                                    key={book._id}
                                    title={book.title}
                                    subtitle={book.subtitle}
                                    authors={book.authors.join(', ')}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    Button={() => (
                                        <button
                                          onClick={() => handleDelete(book._id)}
                                          className='deleteBtn text-white ml-3 float-right'
                                        >
                                          Delete
                                        </button>
                                      )}
                                    />
                                </Card>
                            ))}
                        </ul>
                        ) : (
                            <h1 className='text-center mt-4'>Save some books to your list!</h1>
                        )}          
                </Row>
            </Container>
        </div>
    )
}

export default Saved;