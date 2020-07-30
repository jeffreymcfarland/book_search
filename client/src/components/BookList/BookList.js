import React from 'react';
import { Row, Col } from '../Grid/index';
import './BookList.css';

function BookList(props) {
    return(
        <div>
            <Row>
                <div className='col-md-4 col-sm-12 order-md-last mb-2'>
                    <props.Button />
                    <a className='resultsBtn text-white float-right' target='_blank' rel='noopener noreferrer' href={props.link}>View</a>
                </div>
                <div className='col-md-8 col-sm-12'>
                    <Row>
                        <div className='col-md-12'>
                            <h4>{props.title}</h4>
                            {props.subtitle ? (<h6>{props.subtitle}</h6>) : <br></br>}
                        </div>
                    </Row>
                    <Row>
                        <Col size='md-12'>
                            <p>Writted by {props.authors}</p>
                        </Col>
                    </Row>
                </div>
            </Row>
                <div className='info'>
                <Row>
                    <Col size='12 md-3 sm-4'>
                        <div className='d-flex justify-content-center'>
                            <img className='img-thumbnail img-fluid w-50' src={props.image} alt={props.title} />
                        </div>
                    </Col>
                    <Col size='12 md-9 sm-4'>
                        <p className=''>{props.description}</p>
                    </Col> 
                </Row>
                </div>
        </div>
    )
}

export default BookList;