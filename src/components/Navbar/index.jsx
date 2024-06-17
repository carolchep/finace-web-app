import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/log0.webp';

const Navbar = () => {
    return (
        <div className='sm:flex'>
            <div className='sm:w-1/4'>
                <img src={logo} className="h-40 w-40 ml-auto pl-7 bg-primary object-contain" alt="logo" />
            </div>

            <div className="sm:flex w-3/4 justify-center font-medium items-center bg-primary tracking-widest">
                <Link to="/" className="sm:p-5 pr-4">Home</Link>
                <Link to="/about" className="sm:p-5 pr-4">About Us</Link>
                <Link to="/blog" className="sm:p-5 pr-4">Blog</Link>
                <Link to="/contact" className="sm:p-5 pr-4">Contact Us</Link>
                <Link to="/get-started" className="sm:p-3 bg-black text-white rounded">Get Started</Link>
            </div>
        </div>
    );
}

export default Navbar;
