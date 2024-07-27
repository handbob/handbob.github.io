import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application. Feel free to explore!</p>
      <nav>
        <ul>
          <li><Link to="/tictactoe">Tic Tac Toe</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/hangman">Hangman</Link></li>
          <li><Link to="/chess">Chess</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export { Home };
