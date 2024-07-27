import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggleButton } from './ThemeToggleButton'
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tictactoe">Tic Tac Toe</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li><Link to="/hangman">Hangman</Link></li>
        <li><Link to="/chess">Chess</Link></li>
      </ul>
      <ThemeToggleButton />
    </nav>
  );
};

export { NavBar };
