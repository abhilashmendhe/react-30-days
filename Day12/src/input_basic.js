// first import react and react-dom packages
import React,{Component} from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'
// Day 12 - Forms

class App extends Component {
    constructor(props){
        super(props)
    }
    state = {
      firstName: '',

    }
    handleChange = (e)=>{
      const tvalue = e.target.value;
      this.setState({firstName:tvalue})
    }
    render(){
        const firstName = this.state.firstName;
        return (
            <div className='App'>
              <label htmlFor="firstName">First Name: </label>
              <input 
                type="text" 
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={this.handleChange}
              />
              <h1>{this.state.firstName}</h1>
            </div>
        )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)