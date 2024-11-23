import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer text-white w-screen text-center flex justify-center py-6">
      <div className="container">
        <ul className="footer-links flex list-none justify-center">
          <li className='mx-2 my-2'><Link to="/">Home</Link></li>
          <li className='mx-2 my-2'><Link to="/resume">Resume</Link></li>
          <li className='mx-2 my-2'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
