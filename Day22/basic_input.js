// first import react and react-dom packages
import React,{Component, useState} from 'react'
import ReactDOM  from 'react-dom/client'
import catImg from './images/cat.jpg'
import dogImg from './images/dog.jpg'
// Day 22 - React forms with hook



const App = (props) => {
  const [firstName, setFirstName] = useState('')

  const handleChange = (e) => {
    const value = e.target.value;
    setFirstName(value)
  }
  return (
    <div className='App'>
       <label htmlFor='firstName'>First Name: </label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        placeholder='First Name'
        value={firstName}
        onChange={handleChange}
      />
      <h1>{firstName}</h1>
    </div>
  )
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)