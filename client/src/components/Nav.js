import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookImg from '../images/books.png';
import searchImg from '../images/search.png';

function Nav() {

    const[state, setState] = useState({
        open: false,
        width: window.innerWidth
    })

    return(
        <nav className='navbar navbar-expand-md navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
                <span>    ________ <img src={searchImg} width='20' height='20' alt='search icon'/>  Book Search</span>
            </Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/'>Search <span className='sr-only'>(current)</span></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/saved'>Saved</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;