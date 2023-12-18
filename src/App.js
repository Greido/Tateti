import { useState,useEffect } from 'react';
import './App.css';
import Board from './components/Board/Board';


const App = ()=> {

  const [turn,setTurn]=useState('x')
  const [squares,setSquares]=useState(Array(9).fill(null))
  const [score,setScore]=useState({
    x:0,
    O:0
  });


  const checkWinner= squares =>{
    setTurn(turn==='x'? 'o' : 'x')
    
  }


  const handleClick = square =>{
    let newSquare = [...squares]
    newSquare.splice(square,1,turn)
    setSquares(newSquare);
    checkWinner(newSquare)
  }

  return (
    <div className="container">
        <Board turn= {turn} squares={squares} onClick={handleClick}/>
    </div>
  );
}

export default App;
