// first import react and react-dom packages
import React,{Component, useState} from 'react'
import ReactDOM  from 'react-dom/client'
import axios from 'axios'
// Day 21 - Intro to React Hook
// They allow you use state, life cycle methods and other React features 
// without writing a class component. If we are using hooks we can have 
// only a functional component in the entire application. 

/** State Hook
Using hooks we can access state without writing a class based component.
*/



const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0)
  const addOne = () => {
    let value = count + 1;
    setCount(value);
  }
  const minusOne = () => {
    let value = count - 1;
    setCount(value);
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={addOne}>Increment</button>
      <button onClick={minusOne}>Decrement</button>
    </div>
  )
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)