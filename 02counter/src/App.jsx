import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)
 
  
// let count = 5
const addValue = ()=>{
setCounter((prev) => prev + 1 )
setCounter((prev) => prev + 1 )
setCounter((prev) => prev + 1 )
setCounter((prev) => prev + 1 )

  
}
const removeValue = ()=>{
  if(counter-1 >=0){
    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Increment{counter}</button>
      <br />
      <button onClick={removeValue}>Decrement{counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
