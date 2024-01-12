// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Props object
// Object props
const Header = (props) => {
    const data = props.data
    const { welcome, title, subtitle } = data
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </header>
    )
}
const App = () => {
    const data = {
        welcome  : "Welcome to 30 days of React",
        title    : "Day 5 : Props",
        subtitle : "JS Library",
    } 
    return (
    <div className='app'>
        <Header data={data}/>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)