// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'


const date = new Date().toDateString()

const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1>Exercise - Create 5 Div Random Hex Colors</h1>
            <h3 style={{textAlign:'Center'}}>Date: {date}</h3>
        </div>
    </header>
)



const DivComponents = () => {
    // Hex Color
    const hexColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for(let i=0; i<6; i++){
            let ind = Math.floor(Math.random()*str.length)
            color += str[ind]
        }
        return '#'+color
    }
    const hexArr = []
    for(let i=0; i<6; i++){
        // hexArr.push(hexColor())
        const divStyles = {
            backgroundColor:hexColor(),
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
        hexArr.push(divStyles)
    }
    const divFormatted = hexArr.map(col => <div key={col} style={col}>{col.backgroundColor}</div>)
        
    return (    
        <div>
            {divFormatted}
        </div>
    )
}
const app = (
    <div className='app'>
        <Header />
        {/* <HexaColor/> */}
        <br />
        <DivComponents />
    </div>
)

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(app)