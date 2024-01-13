// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'
// Day 9 - Conditional Rendering

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
  
  // CSS styles in JavaScript Object
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: '3px auto',
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
  }

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            welcome,
            title,
            subtitle,
            author : {firstName, lastName},
            date,
        } = this.props.data;

        return (
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{firstName} {lastName}</p>
                <small>{date}</small>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        loggedIn : false,
    }
    handleLogin = () => {
        this.setState({loggedIn:!this.state.loggedIn})
    }
    render(){
        const data = {
            welcome: '30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
              firstName: 'Abhilash',
              lastName: 'Mendhe',
            },
            date: new Date().toDateString(),
        }
        let status = this.state.loggedIn ? (<h3>Welcome to 30 Days of React</h3>)
            : (<h3>Please Login</h3>)
        let text = this.state.loggedIn ? "Logout" : "Login";

        return (
            <div className='app'>
                <Header data={data} />
                {/* {status}    */}
                <Button text={text} style={buttonStyles} onClick={this.handleLogin}/>
            </div>
        )
    }
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)