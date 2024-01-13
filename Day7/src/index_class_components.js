// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Class Components

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <header>
                <h1>Welcome to 30 days ReactJS</h1>
                <h2>Day 7 - Class Components</h2>
                <h3>JS Library</h3>
                <p>Abhilash Mendhe</p>
                <small>{new Date().toDateString()}</small>
            </header>
        )
    }
}

class TechList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const techs = ['HTML','JS','CSS','GOLANG'];
        const techformated = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techformated;
        
    }
}
class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
        )
    }
}
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright &copy; {new Date().getFullYear()}</p>
                </div>
            </footer>
        )
    }
}
// App class compoennet
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='app'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }

}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)