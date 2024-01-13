// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'
import {countriesData} from './data/countries'
/* Day 8 - States. "State is an object in react which let the component 
re-render when state data changes." */

class Header extends  React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const divStyles = {
            border:"10px solid #566573",
            borderRadius:"8px",
            padding:"80px",
            margin:"20px 50px 75px 100px",
            background:"#EBF5FB",
            position:"relative",
            left:"320px",
            height:"300px",
            width:"1100px",
        }
        return (
            <div style={divStyles}>
                <h1>Honeymoon Destination</h1>
                <h2>In Europe</h2>
            </div>
        )
    }
}
class Destination extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const divStyles = {
            border:"4px solid #566573",
            borderRadius:"8px",
            padding:"50px",
            margin:"10px 10px 15px 100px",
            background:"#EBF5FB",
            position:"relative",
            left:"500px",
            height:"500px",
            width:"700px",
        }
        const {
            name,
            capital,
            languages,
            population,
            flag,
            currency,
        } = this.props 
        const langFormatted = languages.join(", ")
        return (
            <div style={divStyles}>
                <h2>Country   : {name}</h2>
                <h2>Capital   : {capital}</h2>
                <h2>Languages : {langFormatted}</h2>
                <img src={flag} alt={name} height={50} width={50}/>
                <h2>Population : {population}</h2>
                <h2>Currency : {currency}</h2>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {changeCountry} = this.props;
        const buttonStyles = {
            backgroundColor: '#61dbfb',
            padding: 10,
            border: 'none',
            borderRadius: 5,
            margin: 3,
            cursor: 'pointer',
            fontSize: 18,
            color: 'white',
          }
        return (
            <button onClick={changeCountry} style={buttonStyles}>Change Country</button>
        )
    }
}
class App extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        index:0,
    }
    changeCountry = () => {
        const len = countriesData.length - 1;
        const ind = (this.state.index + 1) % len;
        this.setState({index:ind})
    }
    render(){
        const {
            name,
            capital,
            languages,
            population,
            flag,
            currency,
        } = countriesData[this.state.index];
        return (
            <div className='app'>   
                <Header />
                <Destination 
                    name={name} 
                    capital={capital}
                    languages={languages}
                    population={population}
                    flag={flag}
                    currency={currency}
                />
                <Button changeCountry={this.changeCountry}/>
            </div>
        )
    }

}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)