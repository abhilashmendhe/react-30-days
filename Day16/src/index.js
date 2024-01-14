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
const buttonStyle = (CompParam, name="default") => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]
  const {backgroundColor, color} = colors.find((c)=>c.name===name)
  const buttonStyles = {
    backgroundColor,
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color,
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonStyle(Button)
const ReactButton = buttonStyle(Button, 'react')
const InfoButton = buttonStyle(Button, 'info')
const SuccessButton = buttonStyle(Button, 'success')
const WarningButton = buttonStyle(Button, 'warning')
const DangerButton = buttonStyle(Button, 'danger')

class App extends Component {
    constructor(props){
        super(props)
    } 
    render() {
      return (
        <div className='App'>
          <Button text='No Style' onClick={() => alert('I am not styled yet')} />
        <NewButton
          text='Styled Button'
          onClick={() => alert('I am the default style')}
        />
        <ReactButton text='React' onClick={() => alert('I have react color')} />
        <InfoButton
          text='Info'
          onClick={() => alert('I am styled with info color')}
        />
        <SuccessButton text='Success' onClick={() => alert('I am successful')} />
        <WarningButton
          text='Warning'
          onClick={() => alert('I warn you many times')}
        />
        <DangerButton
          text='Danger'
          onClick={() => alert('Oh no, you can not restore it')}
        />
        </div>    
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)