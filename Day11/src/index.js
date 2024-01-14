// first import react and react-dom packages
import React,{Component} from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'
// Day 11 - Events

class App extends Component {
    constructor(props){
        super(props)
    }
    state = {
        firstName:'',
        message:'',
        key:'',
    }
    handleClick = (e) => {
        this.setState({
            message:'Welcome to the world of events',
        })
    }
    handleMouseMove = (e) =>{
        this.setState({
            message:"mouse is moving",
        })
    }
     // to get value when an input field changes a value
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }
  // Blurring happens when a mouse leave an input field
  handleBlur = (e) => {
    this.setState({ message: 'Input field has been blurred' })
  }
  // This event triggers during a text copy
  handleCopy = (e) => {
    this.setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
  }
    render(){

        return (
            <div className=''>
                <h1>Welcome to the world of Events</h1>
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseMove={this.handleMouseMove}>Move on me</button>
                <p onCopy={this.handleCopy}>
                Check copy right permission by copying this text
                </p>

                    <p>{this.state.message}</p>
                    <label htmlFor=''> Test for onKeyPress Event: </label>
                    <input type='text' onKeyPress={this.handleKeyPress} />
                    <br />

                    <label htmlFor=''> Test for onBlur Event: </label>
                    <input type='text' onBlur={this.handleBlur} />

                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name: </label>
                        <input
                        onChange={this.handleChange}
                        name='firstName'
                        value={this.state.value}
                        />
                    </div>

                    <div>
                        <input type='submit' value='Submit' />
                    </div>
                    </form>
            </div>
        )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)