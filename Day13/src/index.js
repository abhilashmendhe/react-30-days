// first import react and react-dom packages
import React,{Component} from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'
// Day 13 - Uncontrolled Componenet
class App extends Component {
    constructor(props){
        super(props)
    }
    firstName = React.createRef()
    lastName  = React.createRef()
    country   = React.createRef()
    handleChange = (e) => {
      /*
      we can get the name and value like this: e.target.name, e.target.value
      but we can also destructure  name and value from e.target
      const name = e.target.name
      const value = e.target.value
      */
      const { name, value } = e.target
      // [variablename] to use a variable name as a key in an object
      // name refers to the name attribute of the input elements
      this.setState({ [name]: value })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.firstName.current.value)
      console.log(this.lastName.current.value)
      console.log(this.country.current.value)
      const data = {
        firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        country: this.country.current.value,
      }
      // the is the place we connect backend api to send the data to the database
      console.log(data)
    }
    render(){
      return (
          <div className='App'>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="firstName">First Name: </label>
              <input type="text" 
                id="firstName"
                name="firstName"
                placeholder='First Name'
                ref={this.firstName}
              />
              <div>
              <label htmlFor="lastName">Last Name: </label>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
              ref={this.lastName}
              onChange={this.handleChange}
              />
              </div>
          <div>
          <label htmlFor="country">Country: </label>
          
            <input
              type='text'
              name='country'
              placeholder='Country'
              ref={this.country}
              onChange={this.handleChange}
            />
          </div>
              <button>Submit</button>
            </form>
          </div>
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)