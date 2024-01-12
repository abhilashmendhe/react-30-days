// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Props object
// Number Props
const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
    <p>The weight of the object on earth is {props.weight} N.</p>
)

// Boolean props
const Status = (props) => {
    let status = props.status ? 'Old enough to get a driver license.' : 'To young to drive.';
    return (<p>{status}</p> )
}

// Array props 
const Skills = (props) => {

    const skillset = props.skills.map((skill) => <li key={skill}>{skill}</li>)
    // <ul>{props.skills}</ul>
    return (
        <ul>{skillset}</ul>
    )
}
const App = () => { 
    let currentYear = new Date().getFullYear()
    let birthYear   = 1994
    const age = currentYear - birthYear
    const gravity = 9.81
    const mass = 75
    const status = age >= 18
    return (
    <div className='app'>
        <Age age={age}/>
        <Weight weight={gravity * mass}/>
        <Status status={status}/>
        <Skills skills={['HTML','JS','CSS','GO']}/>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)