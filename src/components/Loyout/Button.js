import {BrowserRouter as Router, Link} from 'react-router-dom';
import React from 'react';
import classes from './button.module.css';

export default function Button() {
  return (
    <Router>
      <div>
     
        <Link to="/home">
          <button>YouTube</button>
        </Link>

        <br />
        <br />

       
        <a href="" target="_blank" rel="noreferrer">
          <button>Click</button>
        </a>
      </div>
    </Router>
  );
}