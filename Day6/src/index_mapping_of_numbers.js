// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Mapping Arrays of numbers

const Numbers = ({numbers})=>{
    const list = numbers.map((number) => <li>{number}</li>)
    return list
}

const App = () => {
    const numbers = [1,2,3,4,5,6];

    return (
    <div className='app'>
        <div>
            <h2>Numbers List</h2>
            <ul>
                <Numbers numbers={numbers}/>
            </ul>
        </div>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)