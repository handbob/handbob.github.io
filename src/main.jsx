import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TicTacToe } from './components/games/TicTacToe'
import { Chess } from './components/games/Chess'
import { Hangman } from './components/games/Hangman'
import { Cards } from './components/games/Cards'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
