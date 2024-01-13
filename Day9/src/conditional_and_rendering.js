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
const Login = () => {
    <div>
        <h3>Please Login</h3>
    </div>
}
const Welcome = () => {
    <div>
        <h1>Welcome to 30 Days of React</h1>
    </div>
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
        techs : ['HTML','CSS','JS'],
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
        const {loggedIn, techs} = this.state;
        const status = loggedIn ? <Welcome /> : <Login />;
        return (
            <div className='app'>
                <Header data={data} />
                {status}
                <Button
                text={loggedIn ? 'Logout' : 'Login'}
                style={buttonStyles}
                onClick={this.handleLogin}
                />
                {techs.length === 3 && (
                <p>You have all the prerequisite courses to get started React</p>
                )}
                {!loggedIn && (
                <p>
                    Please login to access more information about 30 Days Of React
                    challenge
                </p>
                )}
            </div>
        )
    }
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)