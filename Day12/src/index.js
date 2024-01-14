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
      lastName: '',
      country: '',
      title: '',
    }
    handleChange = (e) => {
      const tvalue = e.target.value;
      const {name, value} = e.target;
      this.setState({[name]:value})
    }
    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
    }
    render(){
      const { firstName, lastName, title, country } = this.state
      return (
          <div className='App'>
            <h3>Add Student</h3>
            <form onSubmit={this.handleSubmit}>
            <div>
              <input 
                type="text" 
                name='firstName' 
                placeholder='First Name' 
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input 
                type="text" 
                name='lastName'
                placeholder='Last Name'
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input 
                type="text" 
                name="country"
                placeholder='Country'
                value={country}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input 
                type="text" 
                name='title'
                placeholder='Title'
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <button className='btn btn-success'>Submit</button>
          </form>
          </div>
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)