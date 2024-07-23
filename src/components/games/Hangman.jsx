import React, { useState } from 'react'

import '../../styles/games/hangman.css'

const Hangman = () => {
  const words = ['react', 'javascript', 'programming', 'hangman', 'developer'];
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const maxWrongGuesses = 6;

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className="letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  const renderButtons = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet.map((letter) => (
      <button
        key={letter}
        onClick={() => handleGuess(letter)}
        disabled={guessedLetters.includes(letter)}
      >
        {letter}
      </button>
    ));
  };

  const isWinner = word.split('').every((letter) => guessedLetters.includes(letter));
  const isGameOver = wrongGuesses >= maxWrongGuesses;

  return (
    <div className="hangman-game">
      <h1>Hangman Game</h1>
      <div className="word">{renderWord()}</div>
      <div className="buttons">{renderButtons()}</div>
      <div className="status">
        {isWinner && <p>Congratulations! You've won!</p>}
        {isGameOver && <p>Game Over! The word was "{word}".</p>}
        <p>Wrong guesses: {wrongGuesses}</p>
      </div>
    </div>
  );
};

export { Hangman };
