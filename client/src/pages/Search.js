import React from 'react';
import Jumbotron from '../components/Jumbotron';
import { Container, Row, Col } from '../components/Grid/index';
import Card from '../components/Card';

function Search() {
    return(
        <div>
            <Container fluid >
                <Jumbotron />
                <Card />
            </Container>
        </div>
    )
}

export default Search;