import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visibility, setVisibility] = useState(true)
  const [num, setNum] = useState(0);

    function Add() {
        setNum(num => num + 1);
    }

    function Sub() {
        setNum(num => num -1);
    }


  return (
    <>
    {visibility &&
      <div>
        <h2>Elemento</h2>
      </div>
    }
    <button onClick = {() => [setVisibility(visibility == true ? false : true)]}>
      alterar visibilidade
    </button>
    
    
    <div>
        <h1>{num}</h1>
        <button onClick={() => Add()}>+</button>
        <button onClick={() => Sub()}>-</button>
    </div>
  

    </>
  )
}

export default App
