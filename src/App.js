import React, { useState } from 'react';
import Squares from './Squares';
import './App.css';

function App() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winning, setWinning] = useState('Tic Tac Toe');

  const makeMove = (id) => {
    if (value[id] || CheckWin()) {
      return; // If the square is already filled or the game is won, do nothing
    }

    const copyArr = [...value];
    copyArr[id] = currentPlayer;

    setValue(copyArr);

    const isWinning = CheckWin();
    if (isWinning) {
      setWinning(currentPlayer === 'X' ? 'O Wins over X' : 'X wins over O');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const handleCLick = (id) => {
    makeMove(id);
  };

  const CheckWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let algo of winningCombinations) {
      const [a, b, c] = algo;
      if (value[a] !== null && value[a] === value[b] && value[a] === value[c]) {
        return true;
      }
    }

    return false;
  };

  // Check for a winner whenever the game board changes
  React.useEffect(() => {
    const isWinning = CheckWin();
    if (isWinning) {
      setWinning(currentPlayer === 'X' ? 'O Wins over X' : 'X wins over O');
    }
  }, [value, currentPlayer]);
  return (
    <div className="App">
      <div>
      <h1>{winning}</h1>
      <div className="square">
        <div className="square-1">
          <Squares value={value[0]} handleclick={() => handleCLick(0)} />
          <Squares value={value[1]} handleclick={() => handleCLick(1)} />
          <Squares value={value[2]} handleclick={() => handleCLick(2)} />
        </div>
        <div className="square-1">
          <Squares value={value[3]} handleclick={() => handleCLick(3)} />
          <Squares value={value[4]} handleclick={() => handleCLick(4)} />
          <Squares value={value[5]} handleclick={() => handleCLick(5)} />
        </div>
        <div className="square-1">
          <Squares value={value[6]} handleclick={() => handleCLick(6)} />
          <Squares value={value[7]} handleclick={() => handleCLick(7)} />
          <Squares value={value[8]} handleclick={() => handleCLick(8)} />
        </div>
      </div>
      <button
        style={{
          width: '10rem',
          height: '4rem',
          marginTop: '2rem',
          borderRadius: '2rem',
          fontSize: '2rem',
          background: 'Transparent',
        }}
        onClick={() => {
          setValue(Array(9).fill(null));
          setCurrentPlayer('X');
          setWinning('Tic Tac Toe');
        }}
      >
        Reset
      </button>
      </div>
    </div>
  );
}

export default App;
