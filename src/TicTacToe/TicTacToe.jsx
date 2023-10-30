import React, { useState } from 'react'
import Squares from './Squares'

const TicTacToe = () => {

    const [value,Setvalue] = useState(Array(9).fill(null));
    const [CurrentPlayer,SetCurrentPlayer] = useState("X");
    const [winning,SetWinning] = useState("Tic Tac Toe")
    const makeMove = (id)=>{

        const isWinning = CheckWin();
        if(isWinning=== true)
        {
            SetWinning(CurrentPlayer === "X" ? `O Wins over X` : `X wins over O`)
        }
        if(isWinning === false){
        const CopyArr = [...value];
        CopyArr[id] = CurrentPlayer;
        Setvalue(CopyArr);
        CurrentPlayer === "X"? SetCurrentPlayer("O"):SetCurrentPlayer("X");
    }
    }
    const handleCLick = (id)=>{
        makeMove(id)
    }
    const CheckWin = ()=>{
        const winning = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
        for(let algo of winning){
            const[a,b,c] = algo;
            if(value[a]!== null && value[a]===value[b] & value[a] === value[c]){
               return true; 
            }
        }
        return false
    }
  return (
    <div>
      <h1>{winning}</h1>
      <div className="square">
        <div className="square-1">
        <Squares value={value[0]} handleclick={() => handleCLick(0)}  />
        <Squares value={value[1]} handleclick={() => handleCLick(1)}  />
        <Squares value={value[2]} handleclick={() => handleCLick(2)}  />
        </div>
        <div className="square-1">
        <Squares value={value[3]} handleclick={() => handleCLick(3)}  />
        <Squares value={value[4]} handleclick={() => handleCLick(4)}  />
        <Squares value={value[5]} handleclick={() => handleCLick(5)}  />
        </div>
        <div className="square-1">
        <Squares value={value[6]} handleclick={() => handleCLick(6)}  />
        <Squares value={value[7]} handleclick={() => handleCLick(7)}  />
        <Squares value={value[8]} handleclick={() => handleCLick(8)}  />
        </div>
      </div>
    <button 
    style={{
        width:"10rem",
        height:"4rem",
        marginTop:"2rem",
        borderRadius:"2rem",
        fontSize:"2rem",
        background:"Transparent"
    }}
    onClick={()=>{
        Setvalue(Array(9).fill(null));
        SetCurrentPlayer("X");
        SetWinning("Tic Tac Toe")
    }
    }
    >Reset</button>
    </div>
  )
}

export default TicTacToe
