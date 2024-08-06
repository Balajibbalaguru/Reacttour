import React from 'react';
import DestinationList from './components/DestinationList';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <DestinationList />
    </div>
  );
}

export default App;
