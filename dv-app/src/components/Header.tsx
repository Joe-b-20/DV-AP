// Project front-end 
// 1. Home/Dashboard Screen
// Header 

import React from 'react';
import DataUploadInterface from './data-upload';

const Header = () => {
  return (
    <header>
      <div className="logo">Your Logo Here</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="/visualization">Visualization</a></li>
          <li><a href="/analysis">Analysis</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
