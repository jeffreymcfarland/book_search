import React from "react";
import './Jumbotron.css';

function Jumbotron() {
    return (
    
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="display-4">Google Books Search</h1>
          <p className="lead">A React app where you can search for google books and save any book to your saved list.</p>
        </div>
      </div>
    
    );
}

export default Jumbotron;