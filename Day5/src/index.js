// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Props object
// Function props
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const App = () => {
    const sayHi = () =>{
        alert("Hi")
    }
    return (
    <div className='app'>
        {/* <Button text="Say Hi" onClick={sayHi}/> */}
        <Button text="Say Hi" onClick={()=>{alert("HI")}}/>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)