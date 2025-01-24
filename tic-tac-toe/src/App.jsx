import { useState } from 'react'
import './App.css'

const TURNS = {
    X: 'X',
    O: 'O'
}


const Square = ({ children, isSelected, updateBoard, index }) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}

const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function App() {
    // States
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)

    const checkWinner = (checkboard) => {
        for(const combo of WINNER_COMBOS){
            const [a,b,c] = combo
            if(
                checkboard[a] &&
                checkboard[a] === checkboard[b] &&
                checkboard[a] === checkboard[c]
            ){
                return checkboard[a]
            }
        }
        return null
    }

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

        //checl winner
        const newWinner = checkWinner(newBoard)
        if(newWinner){
            setWinner(newWinner)
        } 
        // check if game is over
    }

    return (
        <main className='board'>
            <h1>GAME jsandinoDev</h1>
            <section className='game'>
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}>
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>

            <section className='turn' >
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            {
                winner !== null && (
                    <section className='winner'>
                        <div className='text'>
                            <h2>
                                {winner === false 
                                ? 'Draw' 
                                :  'The winner is:'}
                            </h2>

                            <header className='win'>
                                    {winner && <Square>{winner}</Square>}
                            </header>

                            <footer>
                                <button>Play again?</button>
                            </footer>
                        </div>
                    </section>
                )
            }
        </main>
    )
}

export default App
