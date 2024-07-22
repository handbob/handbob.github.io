import React, { useState } from 'react'

import '../../styles/cards.css'

const generateDeck = () => {
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const values = [
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: 'J' },
    { value: 12, label: 'Q' },
    { value: 13, label: 'K' },
    { value: 14, label: 'A' }
  ];
  const deck = [];

  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ suit, value: value.value, label: value.label });
    });
  });

  return deck;
};

const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

const Cards = () => {
  const [deck, setDeck] = useState(shuffleDeck(generateDeck()));
  const [player1Card, setPlayer1Card] = useState(null);
  const [player2Card, setPlayer2Card] = useState(null);
  const [winner, setWinner] = useState('');

  const drawCards = () => {
    if (deck.length < 2) return;

    const newDeck = [...deck];
    const player1Card = newDeck.pop();
    const player2Card = newDeck.pop();

    setPlayer1Card(player1Card);
    setPlayer2Card(player2Card);
    setDeck(newDeck);

    if (player1Card.value > player2Card.value) {
      setWinner('Player 1 wins!');
    } else if (player1Card.value < player2Card.value) {
      setWinner('Player 2 wins!');
    } else {
      setWinner('It\'s a tie!');
    }
  };

  return (
    <div>
      <h1>Cards Game</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Player 1</h2>
          {player1Card && <p>{player1Card.label} of {player1Card.suit}</p>}
        </div>
        <div className="card">
          <h2>Player 2</h2>
          {player2Card && <p>{player2Card.label} of {player2Card.suit}</p>}
        </div>
      </div>
      <button onClick={drawCards}>Draw Cards</button>
      {winner && <h2>{winner}</h2>}
    </div>
  );
};

export { Cards };
