// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
import abhiimg from './images/img1.jpg'

const rootElem = document.getElementById('root')
const headerStyles = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
}
const welcome = "Welcome to 30 Days of React";
const title = "Getting started with React";
const subtitle = "JavaScript Library";
const author = {
    fname:'Abhilash',
    lname:'Mendhe'
}
const date = new Date().toDateString();
const header = (
    <header style={headerStyles}>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>Learner: <strong>{author.fname} {author.lname}</strong></p>
            <small>Date: {date}</small>
        </div>
    </header>
)

// JSX element, main
const mainStyles = {
    backgroundColor: '#F3F0F5',
}
const techs = ['HTML','CSS', 'JS'];
const techsFormatted = techs.map((tech)=><li key={tech}>{tech}</li>)
const user = (
    <div>
        <img src={abhiimg} alt='MyImage' width='220' height='300'/>
    </div>
)
const main = (
    <main style={mainStyles}>
        <div className='main-wrapper'>
        <p>Prerequisite to get started with <strong>react.js</strong></p>
        <ul>{techsFormatted}</ul>
        {user}
        </div>
    </main>
)

const footerStyles = {
    backgroundColor: '#61DBFB',
}
const copyright = `Copyright @ ${new Date().getFullYear()}`
const footer = (
    <footer style={footerStyles}>
        <div className='footer-wrapper'>
        <p>{copyright}</p>
        </div>
    </footer>
)


const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)
const root = ReactDOM.createRoot(rootElem)
root.render(app)