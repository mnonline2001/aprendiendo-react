import {WINNER_COMBOS} from "../constants.js";

export  const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    // para ver si x u o gano
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] && // x u o
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a] // x u o
        }
    }
    //si no hay ganador
    return null
}
