// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Mapping - Exercises hexdecimal
const getRandomColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for(let i=0; i<6; i++){
        let ind = Math.floor(Math.random()*str.length)
        color += str[ind]
    }
    return '#'+color
}

const Header = () => {
    const headerStyle = {
        textAlign:"center",
        width: "100%",
        height: "50%",
        padding: "3rem 0.5rem",
        
    }
    return (
        <div style={headerStyle}>
            <h1>30 Days of React</h1>
            <h2>Hexadecimal Colors</h2>
        </div>
    )
}

const Box = ({color}) => {
    const boxStyles = {
        backgroundColor : color,
        width: "150px",
        height: "150px",
        padding: "60px 30px",
        color:"white",
        fontSize:"20px",
        fontWeight:"bold",
        display: "inline-block",
        borderRadius: "7px",
        margin:"2px",
        // top:"0px"
    }
    return (
        <div style={boxStyles}>
            <p>{color}</p>
        </div>
    )
}

const RowBoxes = ({boxes}) => {

    const colorsDiv = boxes.map((color) => <Box key={color} color={color}/>)    
    const rowBoxesStyles = {
        // padding:"10px",
        position:"relative",
        left:"320px",
    }
    return (
        <div style={rowBoxesStyles}>
            {colorsDiv}
        </div>
    )
}

const ColBoxes = ({allBoxes}) => {
    
    const colorsRowsDiv = allBoxes.map((boxes) => <RowBoxes key={boxes} boxes={boxes}/>)
    return (
        <div>
            {colorsRowsDiv}
        </div>
    )
}


const App = () => {
    
    const allBoxes = [];
    for(let j=0; j<5; j++)
    {
        const boxes = []
        for(let i=0; i<8; i++) {
            boxes.push(getRandomColor());
        }
        allBoxes.push(boxes);
    }
    return (
    <div className='app'>
        <div>
            <Header/>
            <ColBoxes allBoxes={allBoxes}/>
        </div>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)