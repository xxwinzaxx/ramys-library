import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <div><Link to="/">Ramy's Library</Link></div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/library">Library</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
