import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderWithCounter from './components/HeaderWithCounter'
import ButleField from './components/ButleField'
import ResetButton from './components/ResetButton'
import { useGameState } from './state/useGameState';



let TXT = 'Треба потопоти корабель'

const useMagic = () => {
  const [state, setText] = React.useState({
    n:1,
    text: TXT
  })

React.useEffect(() => {
  const timeoutId = setTimeout(() => {
  const dots = new Array(state.n).fill('!').join('')
  const n = state.n > 2 ? 1 : state.n + 1
  setText({n, text: `${TXT}${dots}`})

}, 1000)
return () => clearTimeout(timeoutId)
},[state])
return state.text

}



function App() {
  const {turn, reset, matrix, fire, won} =useGameState()
 
if(won){
  TXT = 'Перемога'
}
if(!won){
  TXT = 'Треба потопоти корабель'
}


  return (
    <div className="App">
      {useMagic()}
     <HeaderWithCounter turn={turn}/>
     <ButleField matrix={matrix} onFire={fire}/>
     <ResetButton reset={reset}/>
     
    </div>
  );
}

export default App;
