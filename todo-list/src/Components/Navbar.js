import React from 'react';
import Navbar from './Navbar';
import './Navbar.css';


function App() {
  return (
    <div>
      <Navbar />
      <nav>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Products</li> 
      </ul>
    </nav>
    </div>
  );
}

export default App;
