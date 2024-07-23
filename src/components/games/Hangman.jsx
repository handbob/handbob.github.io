import React, { useState } from 'react';

import '../../styles/games/hangman.css';

const Hangman = () => {
  const words = ['react', 'javascript', 'programming', 'hangman', 'developer'];
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const maxWrongGuesses = 10;

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
        disabled={guessedLetters.includes(letter) || isGameOver || isWinner}
        className="letter-button"
      >
        {letter}
      </button>
    ));
  };

  const resetGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
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
        <p>Wrong guesses: {wrongGuesses} / {maxWrongGuesses}</p>
      </div>
      {(isWinner || isGameOver) && (
        <button className="play-again-button" onClick={resetGame}>
          Play Again
        </button>
      )}
      <div className="hangman-figure">
        {wrongGuesses > 0 && <div className="part part-base"></div>}
        {wrongGuesses > 1 && <div className="part part-pole"></div>}
        {wrongGuesses > 2 && <div className="part part-arm"></div>}
        {wrongGuesses > 3 && <div className="part part-rope"></div>}
        {wrongGuesses > 4 && <div className="part part-head"></div>}
        {wrongGuesses > 5 && <div className="part part-body"></div>}
        {wrongGuesses > 6 && <div className="part part-arm-left"></div>}
        {wrongGuesses > 7 && <div className="part part-arm-right"></div>}
        {wrongGuesses > 8 && <div className="part part-leg-left"></div>}
        {wrongGuesses > 9 && <div className="part part-leg-right"></div>}
      </div>
    </div>
  );
};

export { Hangman };
