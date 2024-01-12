// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Props object - exercise 

const DivBoxes = (props) => {

    
    const divStyles = props.divStyles
    console.log(divStyles)
    const boxes = divStyles.map((css) => <div key={css.backgroundColor} style={css}>{css.backgroundColor}</div>)
    

    return (
        <div>{boxes}</div>
    )
}

const App = () => {
    let colorsCSS = []
    const getRandomColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for(let i=0; i<6; i++){
            let ind = Math.floor(Math.random()*str.length)
            color += str[ind]
        }
        return '#'+color
    }
    const divStyles = {
        backgroundColor:getRandomColor(),
        padding:"40px 0px 0px 0px",
        fontWeight:"bold",
        color:'white',
        textAlign:'center',
        fontSize:"20px",
        border:'2px solid',
        borderRadius:'10px',
        height:'120px',
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",    
    }
    for(let i=0; i<6; i++){
        divStyles.backgroundColor = getRandomColor()
        colorsCSS.push(structuredClone(divStyles))
    }
    colorsCSS.forEach(colro=>{
        console.log(colro.backgroundColor)
    })
    return (
    <div className='app'>
    <DivBoxes divStyles={colorsCSS}/>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)