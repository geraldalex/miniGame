
import { createArray } from "../utils/array";
import { random } from "../utils/random";
import { createWarShip } from "../utils/buttleField";
import { useState } from "react";
import { CHECKED_WATER, CHECKED_SHIP, WATER, SHIP} from "./cellstate";


const MAX_MATRIX_LENGTH = 10

const createEmptyButleField = () => createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0))

const createButtleField = () => {
    const emptyBatttleField = createEmptyButleField()
    const newWarship = createWarShip(4, MAX_MATRIX_LENGTH)

    newWarship.forEach(({x, y}) => {
     
        emptyBatttleField[y][x] = SHIP

   
})

return emptyBatttleField
}
export const useGameState = () => {
const [state, setState] = useState({
    matrix:createButtleField(),
    turn: 0,
    won: false
})
 
    const reset = () => {
        setState({
            matrix:createButtleField(),
            turn: 0  ,
            won: false
        })
    }

    const fire = (y: number, x: number) => {
        console.log(x,y)
        const cell = state.matrix[x][y]
        
        if(cell === CHECKED_WATER || cell === CHECKED_SHIP){
            return;
        }
        const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP

        state.matrix[x][y] = newState
        const won = state.matrix.every((line) => line.every((x) => x !== SHIP))
        setState({...state, turn: state.turn + 1, won})
    }

    const {turn, matrix, won } = state

    return {
        turn,reset, matrix, fire, won
    }


}
