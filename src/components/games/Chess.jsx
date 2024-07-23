import React, { useState } from 'react'

import '../../styles/games/chess.css'

const initialBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

const Chess = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquareClick = (row, col) => {
    if (selectedPiece) {
      const newBoard = board.map(row => row.slice());
      newBoard[row][col] = board[selectedPiece.row][selectedPiece.col];
      newBoard[selectedPiece.row][selectedPiece.col] = '';
      setBoard(newBoard);
      setSelectedPiece(null);
    } else if (board[row][col]) {
      setSelectedPiece({ row, col });
    }
  };

  return (
    <div>
      <h1>Chess Game</h1>
      <div className="chessboard">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((piece, colIndex) => (
              <div
                key={colIndex}
                className={`square ${(rowIndex + colIndex) % 2 === 0 ? 'white' : 'black'}`}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
              >
                {piece && <span className="piece">{piece}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Chess };
