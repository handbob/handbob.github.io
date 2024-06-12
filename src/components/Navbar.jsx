import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/tictactoe">Tic-Tac-Toe</Link>
      <Link to="/chess">Chess</Link>
      <Link to="/hangman">Hangman</Link>
      <Link to="/cards">Cards</Link>
    </nav>
  );
};

export { Navbar };
