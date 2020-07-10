import React from 'react';

function Card({ children, mt4 }) {
    return(
        <div className={`card ${mt4 ? 'mt-4' : ''}`}>
            <div className='card-body'>
                {children}
            </div>
        </div>
    )
}

export default Card;