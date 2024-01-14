// first import react and react-dom packages
import React,{Component} from 'react'
import ReactDOM  from 'react-dom/client'
import './styles/header.css'
// Day 16 - Higher Order Component

const Button = ({onClick, text, style}) =>{
  return(
    <button onClick={onClick} style={style}>{text}</button>
  )
}
const buttonStyle = (CompParam) => {
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonStyle(Button)

class App extends Component {
    constructor(props){
        super(props)
    } 
    render() {
      return (
        <div className='App'>
          <Button text="No Style"/>
          <NewButton text="Styled Button"/>
        </div>    
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)