import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Game Website</h1>
      <div className="game-blocks">
        <div className="game-block">
          <Link to="/tictactoe">Tic-Tac-Toe</Link>
        </div>
        <div className="game-block">
          <Link to="/chess">Chess</Link>
        </div>
        <div className="game-block">
          <Link to="/hangman">Hangman</Link>
        </div>
        <div className="game-block">
          <Link to="/cards">Cards</Link>
        </div>
      </div>
    </div>
  );
};

export { Home };
