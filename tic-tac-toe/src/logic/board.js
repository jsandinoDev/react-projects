
import { WINNER_COMBOS } from "../constants"

export const checkWinner = (checkboard) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            checkboard[a] &&
            checkboard[a] === checkboard[b] &&
            checkboard[a] === checkboard[c]
        ) {
            return checkboard[a]
        }
    }
    return null
}

export const checkEndGame = () => {
    return newBoard.every((square) => square !== null)
}