import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { TicTacToe } from './components/TicTacToe'
import { Chess } from './components/Chess'
import { Hangman } from './components/Hangman'
import { Cards } from './components/Cards'
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
