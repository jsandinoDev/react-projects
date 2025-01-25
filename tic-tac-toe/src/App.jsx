import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti";
import { Square } from './componets/Square';
import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { WinnerModal } from './componets/WinnerModal';
import { Board } from './componets/Board';
import { resetGameStorage, saveGameToStorage } from './logic/storage';
function App() {
    // States
    const [board, setBoard] = useState( () => {
        const boardFromLocalStorage = window.localStorage.getItem('board')
        return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
        
    })
        
    const [turn, setTurn] = useState( () => {
        const turnFromLocalStorage = window.localStorage.getItem('turn')
        return turnFromLocalStorage ?? TURNS.X
    })
    const [winner, setWinner] = useState(null)


    const updateBoard = (index) => {
        // avoid overwrite of an element || had a winner
        if (board[index] || winner) return

        // update board
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        // update turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        saveGameToStorage({
            board: newBoard,
            turn: newTurn
        })

        //check winner
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti();
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false) // draw
        }

    }
    

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.x)
        setWinner(null)

        resetGameStorage();
    }

    

    return (
        <main className='board'>
            <h1>Gato jsandinoDev</h1>
            <button onClick={resetGame}>Reset Game</button>

            <section className='game'>
                {
                    <Board board={board} updateBoard={updateBoard} />
                }
            </section>

            <section className='turn' >
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )
}

export default App
