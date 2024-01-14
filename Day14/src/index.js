// first import react and react-dom packages
import React,{Component} from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'
// Day 13 - Component Life Cycles
/**
 *  In React each component has three main phases:
      Mounting
      Updating
      Unmounting
 */

// Updating
class App extends Component {
    constructor(props){
        super(props)
        console.log('I am  the constructor and  I will be the first to run.')
        this.state = {
          firstName: '',
          data: [],
          day: 1,
        }
    } 
    shouldComponentUpdate(nextProps, nextState){
      console.log("shouldComponenetUpdate")
      console.log(nextProps, nextState)
      // console.log(nextState.day)
      if (nextState.day > 11) {
        return false
      } else {
        return true
      }
    }
    // the doChallenge increment the day by one
    doChallenge = () => {
      this.setState({
        day: this.state.day + 1,
      })
    }
    componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate")
      if (prevState.day === 10) {
        this.setState({
          congratulate: 'Congratulations,Challenge has been completed',
        })
      }
      console.log(prevState, prevProps)
    }
    render() {
      console.log('I am render and I will be the third to run.')
      return (
        <div className='App'>
          <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
        </div>    
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)