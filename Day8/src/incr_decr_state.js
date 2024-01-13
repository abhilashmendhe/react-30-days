// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

/* Day 8 - States. "State is an object in react which let the component 
re-render when state data changes." */
const divButton = {
    display:"inline-block",
    height:"100px",
    width:"100px",
    margin:"20px"
}
const appDiv = {
    display:"inline-block",
    padding:"200px",
    position:"relative",
    left:"400px"
}
class App extends React.Component{
    state = {
        count:0,
    }
    // method to increment
    incrOne = () =>{
        this.setState({count:this.state.count + 1})
    }

    // method to decrement
    decrOne = () =>{
        this.setState({count:this.state.count - 1})
    }
    render(){
        const count = this.state.count;
        return (
            <div className='app' style={appDiv}>
                <h1>{count}</h1>
                <button onClick={this.incrOne} style={divButton}>
                    Increment
                </button>
                <button onClick={this.decrOne} style={divButton}>
                    Decrement
                </button>
            </div>
        )
    }

}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)