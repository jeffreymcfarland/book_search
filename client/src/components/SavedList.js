import React from 'react';
import { Row, Col } from './Grid/index';

function SavedList(props) {
    return(
        <div>
            <Row>
                <div className='col-md-8 col-sm-10'>
                    <h3>{props.title}</h3>
                    {props.subtitle ? (<h5>{props.subtitle}</h5>) : <br></br>}
                </div>
                <div className='col-md-4 col-sm-2'>
                    <props.Button />
                    <a className='resultsBtn text-white float-right' target='_blank' rel='noopener noreferrer' href={props.link}>
                        View
                    </a>
                </div>
            </Row>
            <Row fluid>
                <Col size='md-12'>
                    <p>Writted by {props.authors}</p>
                </Col>
            </Row>
            <div className='info'>
            <Row>
                <Col size='12 md-3 sm-4'>
                    <div className='d-flex justify-content-center'>
                        <img className='img-thumbnail img-fluid w-50' src={props.image} alt={props.title} />
                    </div>
                </Col>
                <Col size='12 md-9 sm-4'>
                    <p>{props.description}</p>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default SavedList;

