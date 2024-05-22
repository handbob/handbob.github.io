import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TicTacToe from './components/TicTacToe'
import Chess from './components/Chess'
import Hangman from './components/Hangman'
import Cards from './components/Cards'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;
