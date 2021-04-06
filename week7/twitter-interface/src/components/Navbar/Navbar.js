import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      
        <Link to='/' className='link'> Home </Link>
        <Link to='/tweets' className='link'> Tweets </Link> 
        <Link to='/login' className='link'> Login </Link>
      
      <p>Have a Great Day !</p>
    </div>
  );
}
export default withAuth(Navbar);
