import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import searchImg from '../images/search.png';

function Nav() {

    const[toggle, setToggle] = useState(true);

    const toggleSearch = () => {
        console.log(window.location.pathname)
        setToggle(true)
    };

    const toggleSaved = () => {
        console.log(window.location.pathname)
        setToggle(false)
    };

    return(
        <nav className='navbar navbar-expand-md navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
                <span>    ________ <img src={searchImg} width='20' height='20' alt='search icon'/>  Book Search</span>
            </Link>
            <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link onClick={toggleSearch} className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} to='/'>Search</Link>
                </li>
                <li className='nav-item'>
                    <Link onClick={toggleSaved} className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} to='/saved'>Saved</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;