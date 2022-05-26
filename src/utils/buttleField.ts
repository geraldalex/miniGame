import {createArray} from './array'
import {random} from './random'

type Point  = {x:number, y: number}
   
export const createWarShip = (shipLength: number, maxSize: number ): Point[] =>{
const position = random(0,2) % 2 === 0 ? 'horizontal' : 'vertical'
return position === 'horizontal'
? createHorizontalWarShip(shipLength, maxSize)
: createVerticalWarShip(shipLength, maxSize)
}

const createHorizontalWarShip = (length: number, maxSize:number) => {
    const maxX = maxSize - length -1
    const maxY = maxSize -1

    const headX = random(0, maxX)
    const headY = random(0, maxY)

    return createArray(length, (i) => {
        return {y: headY, x: headX + i}
    })
}

const createVerticalWarShip = (length: number, maxSize:number) => {
    const maxX = maxSize -1
    const maxY = maxSize - length -1

    const headX = random(0, maxX)
    const headY = random(0, maxY)

    return createArray(length, (i) => {
        return {y: headY+i, x: headX}
    })
}