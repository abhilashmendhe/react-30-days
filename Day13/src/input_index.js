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
    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.firstName.current.value)
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
              <button type='submit'>Submit</button>
            </form>
          </div>
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)