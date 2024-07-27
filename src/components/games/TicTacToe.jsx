import React, { useState } from 'react'

import '../../styles/games/tictactoe.css'

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick, size }) => {
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  const renderBoard = () => {
    let board = [];
    for (let row = 0; row < size; row++) {
      let boardRow = [];
      for (let col = 0; col < size; col++) {
        boardRow.push(renderSquare(row * size + col));
      }
      board.push(
        <div key={row} className="board-row">
          {boardRow}
        </div>
      );
    }
    return board;
  };

  return <div>{renderBoard()}</div>;
};

const TicTacToe = () => {
  const [size, setSize] = useState(10);
  const [history, setHistory] = useState([Array(size * size).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current, size);

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const currentCopy = current.slice();
    if (winner || currentCopy[i]) return;
    currentCopy[i] = xIsNext ? 'X' : 'O';
    setHistory([...historyCopy, currentCopy]);
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
    setHistory([Array(newSize * newSize).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-settings">
        <label>
          Board size:
          <input
            type="number"
            min="5"
            max="20"
            value={size}
            onChange={handleSizeChange}
          />
        </label>
      </div>
      <div className="game-board">
        <Board squares={current} onClick={handleClick} size={size} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

const calculateWinner = (squares, size) => {
  const lines = [];

  // Rows
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size - 4; col++) {
      const line = [];
      for (let k = 0; k < 5; k++) {
        line.push(row * size + col + k);
      }
      lines.push(line);
    }
  }

  // Columns
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size - 4; row++) {
      const line = [];
      for (let k = 0; k < 5; k++) {
        line.push((row + k) * size + col);
      }
      lines.push(line);
    }
  }

  // Diagonals
  for (let row = 0; row < size - 4; row++) {
    for (let col = 0; col < size - 4; col++) {
      const diag1 = [];
      const diag2 = [];
      for (let k = 0; k < 5; k++) {
        diag1.push((row + k) * size + (col + k));
        diag2.push((row + k) * size + (col + 4 - k));
      }
      lines.push(diag1);
      lines.push(diag2);
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const [a, ...rest] = lines[i];
    if (squares[a] && rest.every(index => squares[index] === squares[a])) {
      return squares[a];
    }
  }

  return null;
};

export { TicTacToe };
