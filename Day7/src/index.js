// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Class Components - Accessing props from class components

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    greetPeople(){
        alert("Hi how are you?");
    }
    render() {
        const {
            welcome,
            title,
            subtitle,
            author:{firstname, lastname},
            date,
        } = this.props.data
        return (
            <header>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{firstname} {lastname}</p>
                <small>{date}</small>
                <button onClick={this.greetPeople}>Greet</button>
            </header>
        )
    }
}

class TechList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {techs} = this.props;
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
            <TechList techs={this.props.techs}/>
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
        const {year} = this.props
    
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright &copy; {year}</p>
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
        const data = {
            welcome: "Welcome to 30 days of ReactJS",
            title: "Getting started with React",
            subtitle: "JS Library",
            author: {
                firstname: "Abhilash",
                lastname : "Mendhe",
            },
            date: new Date().toDateString(),

        }
        const techs = ['HTML','CSS','JS','GOLANG','JAVA']
        return (
            <div className='app'>
                <Header data={data}/>
                <Main techs={techs}/>
                <Footer year={new Date().getFullYear()}/>
            </div>
        )
    }

}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)