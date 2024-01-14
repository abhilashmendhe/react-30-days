// first import react and react-dom packages
import React,{Component, useState} from 'react'
import ReactDOM  from 'react-dom/client'
import catImg from './images/cat.jpg'
import dogImg from './images/dog.jpg'
// Day 22 - React forms with hook



const App = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }

  const [formData, setData] = useState(initialState)

  const onChange = (e) => {
    const {name, value} = e.target;
    setData({...formData, [name]:value})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
    console.log(formData)
  }
  const { firstName, lastName, title, country } = formData
  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={country}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={onChange}
          />
        </div>

        <button className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)