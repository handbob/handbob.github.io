import React, { createContext, useState, useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'

import '../styles/home.css'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/tictactoe">Tic-Tac-Toe</Link>
      <Link to="/chess">Chess</Link>
      <Link to="/hangman">Hangman</Link>
      <Link to="/cards">Cards</Link>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
};

// Home Component
const Home = () => {
  return (
    <ThemeProvider>
      <div className="home">
        <Navbar />
        <h1>Welcome to the Game Website</h1>
        <div className="game-blocks">
          <div className="game-block light">
            <Link to="/tictactoe">Tic-Tac-Toe</Link>
          </div>
          <div className="game-block light">
            <Link to="/chess">Chess</Link>
          </div>
          <div className="game-block light">
            <Link to="/hangman">Hangman</Link>
          </div>
          <div className="game-block light">
            <Link to="/cards">Cards</Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
