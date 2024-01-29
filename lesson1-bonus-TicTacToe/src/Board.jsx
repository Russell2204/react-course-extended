import Square from './Square'
import {useState} from 'react'
export default function Board() {
const [squares, setSquares] = useState(Array(9).fill(' '))
function handleClick() {
  const nextSquares = squares.slice();
  nextSquares[0] = "X";
  setSquares(nextSquares);
}
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}></Square>
        <Square value={squares[1]} onSquareClick={handleClick}></Square>
        <Square value={squares[2]} onSquareClick={handleClick}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick}></Square>
        <Square value={squares[4]} onSquareClick={handleClick}></Square>
        <Square value={squares[5]}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick}></Square>
        <Square value={squares[7]} onSquareClick={handleClick}></Square>
        <Square value={squares[8]} onSquareClick={handleClick}></Square>
      </div>
    </>
  )
}
