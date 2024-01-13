// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'
import catImg from './images/cat.jpg'
import dogImg from './images/dog.jpg'

/* Day 8 - States. "State is an object in react which let the component 
re-render when state data changes." */

const appDiv = {
    display:"inline-block",
    position:"relative",
    left:"650px",
    top:"200px"
}
class App extends React.Component{
    state = {
        image: dogImg,
        alt: "Dog"
    }
    changeAnimal = () => {
        let image = this.state.image === dogImg ? catImg : dogImg;
        let alt = this.state.alt === "Dog" ? "Cat" : "Dog";
        this.setState({image:image,alt:alt})
    }
    
    render(){
        return (
            <div className='app' style={appDiv}>
                <h1>{this.state.alt}</h1>
                <img src={this.state.image} alt={this.state.alt} width="600" height="400"/>
                <br/>
                <button onClick={this.changeAnimal}>
                    Change Image
                </button>
            </div>
        )
    }

}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)