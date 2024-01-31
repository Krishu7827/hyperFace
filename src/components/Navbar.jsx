import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <div className="mobile-box-container">
    <div className="text">Hey <span className='User-name'>Anirudh</span>👋</div>
    <div className="image-container">
      <img
        src="https://img.lovepik.com/element/45001/3052.png_860.png" 
        alt="Profile"
        className="profile-image"
      />
    </div>
  </div>

  );
};

export default Navbar;
