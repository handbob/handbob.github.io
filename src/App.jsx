import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { ThemeProvider } from './components/ThemeContext';
import { TicTacToe } from './components/games/TicTacToe';
import { Chess } from './components/games/Chess';
import { Hangman } from './components/games/Hangman';
import { Cards } from './components/games/Cards';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                    <Route path="/chess" element={<Chess />} />
                    <Route path="/hangman" element={<Hangman />} />
                    <Route path="/cards" element={<Cards />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
