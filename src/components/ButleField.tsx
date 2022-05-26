import React from 'react';
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from '../state/cellstate';

type CellProps = {
    value: number;
    handleClick: (y: number, x: number) => void;
    x:number;
    y:number;
    
    
}


const viewCell = (v:number) => {
    let out = ''
    if (v === 3){
        out= '🔥 '
    }
    if (v === 2){
       out = '🌊'
    }
return out

}

const Cell = ({handleClick, value, x, y}: CellProps) => {
    return <button className='cell' onClick={() =>handleClick(x,y)}>{

         viewCell(value)
        }</button>
}

type ButtleFieldProps = {
    matrix: number [][];
    onFire: (x: number, y: number) => void
}

const ButleField = ({matrix, onFire}: ButtleFieldProps) => {
    return <div>
        {matrix.map((line, lineNumber) => (
            <div key={lineNumber} className={'line'}>{line.map((v,i) => (
                <Cell key={`${lineNumber}${i}`} value={v} y={lineNumber} x={i} handleClick={onFire}/>
            ))}</div>
        ))}
    </div>
  }

  export default ButleField