// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Props object

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{props.welcome}</h1>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <p>
                    {props.firstName} {props.lastName}
                </p>
                <small>{props.datee}</small>
            </div>
        </header>
    )
}

    const App = () => { 
        const welcome = "Welcome to 30 days of ReactJS"
        const title   = "Day 5 - Props"
        const subtitle = "JS Library"
        const firstName = "Abhilash"
        const lastName  = "Mendhe"
        const date   = new Date().toDateString()
        return (
        <div className='app'>
            <Header 
                welcome={welcome} 
                title={title}
                subtitle={subtitle}
                firstName={firstName}
                lastName={lastName}
                date={date}
            />
        </div>
        )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)