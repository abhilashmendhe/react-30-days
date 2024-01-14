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

// Mounting
class App extends Component {
    constructor(props){
        super(props)
        console.log('I am  the constructor and  I will be the first to run.')
        this.state = {
          firstName: '',
          data: []
        }
    } 
    static getDerivedStateFromProps(props, state) {
      console.log(
        'I am getDerivedStateFromProps and I will be the second to run.'
      )
      return null
    }
    componentDidMount() {
      console.log('I am componentDidMount and I will be last to run.')
      // setTimeout(() => {
      //   this.setState({
      //     firstName: 'Abhi',
      //   })
      // }, 3000)
      const API = 'https://restcountries.com/v3.1/region/europe?fields=name,flag,currencies,languages,flags,population,capital';
      fetch(API)
        .then((response)=>{
          return response.json()
        })
        .then((data) => {
          this.setState({data:data})
        })
        .catch((error) => {
          console.log(error)
        })
    }
    renderCountries = () => {
      const countryDiv = {
        position:"relative",
        left:"600px",
        padding:"20px"
      };
      return this.state.data.map((country) => {
        console.log(country.currencies)
        const langs = Object.values(country.languages).join(", ")
        return (
          <div style={countryDiv} key={country.name.common}>
            <h3>Name: {country.name.common}</h3>
            <h3>Capital: {country.capital}</h3>
            <img src={country.flags.svg} alt={country.name.common} height="100px" width="150px"/>
            <h3>Languages: {langs}</h3>
            <h3>Population: {country.population}</h3>
          </div>
        )
      })
    }
    render() {
      console.log('I am render and I will be the third to run.')
      return (
        <div className='App'>
          <h1>React Component Life Cycle</h1>
          <h1>Calling API</h1>
          <div>
            <p>There are {this.state.data.length} countries in EU.</p>
            {this.renderCountries()}
          </div>
        </div>    
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)