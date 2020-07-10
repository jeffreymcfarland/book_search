import React from 'react';
import { Row, Col } from './Grid/index';

function BookList(props) {
    return(
        <div>
                <Row fluid>
                    <Col size='md-12'>
                        <h3>{props.title}</h3>
                        {props.subtitle ? (<h5>{props.subtitle}</h5>) : <h5>---------</h5>}
                    </Col>
                </Row>
                <Row fluid>
                    <Col size='md-12'>
                        <p>Writted by {props.authors}</p>
                    </Col>
                </Row>
                <Row>
                    <Col size='12 md-3 sm-4'>
                        <img className='img-thumbnail img-fluid w-50' src={props.image} alt={props.title} />
                    </Col>
                    <Col size='12 md-9 sm-4'>
                        <p>{props.description}</p>
                        <a className='btn btn-primary text-white' target='_blank' rel='noopener noreferrer' href={props.link}>
                            View
                        </a>
                    </Col>
                </Row>
        </div>
    )
}

export default BookList;