// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

const welcome = "Welcome to 30 days of React"
const title   = "Getting Started, Day 4 - React Components"
const subtitle = "JS Library"
const author = {
    firstName : "Abhilash",
    lastName  : "Mendhe",
}
const date = new Date().toDateString()

const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Learner : {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
        </div>
    </header>
)
const techs = ["HTML","JS","CSS","C++","Java","Golang"]
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
const Main = () => (
    <main>
        <div className='main-wrapper'>
            <div>
                <p>
                    Prerequisite to get started{' '}
                    <strong>
                        <em>react.js</em>
                    </strong>
                </p>
                <ul>
                    {techsFormatted}
                </ul>
            </div>
        </div>
    </main>
)

const Footer = () => (
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
    </footer>
)

const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0,255,0)',
    // background: {hexColor},
    border: 'none',
    borderRadius: 5,

}
const Button = () => (
    <button style={buttonStyles}>Action</button>
)

// Hex Color
const hexColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for(let i=0; i<6; i++){
        let ind = Math.floor(Math.random()*str.length)
        color += str[ind]
    }
    return '#'+color
}
const HexaColor = () => <div>{hexColor()}</div>
const app = (
    <div className='app'>
        <Header />
        <Main />
        <Button/>
        <HexaColor/>
        <Footer />
    </div>
)

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(app)