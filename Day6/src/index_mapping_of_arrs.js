// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Mapping Arrays of arrays
const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JS', 9],
    ['ReactJS', 8],
]
const Skill = ({skill:[tech, level]}) => {
    return (
        <li>
            {tech} {level}
        </li>
    )
}

const Skills = ({skills}) => {
    const skillLists = skills.map((skill)=><Skill key={skill} skill={skill}/>)
    return <ul>{skillLists}</ul>
}

const App = () => {

    return (
    <div className='app'>
        <div>
            <h2>Skills Level</h2>
            <Skills skills={skills}/>
        </div>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)