// first import react and react-dom packages
import React,{Component} from 'react'
import ReactDOM  from 'react-dom/client'
// Day 18 - Fetch and Axios

const Country = ({
  country : {name, capital, flags,languages, population, currencies}
}) => {
  // console.log(currencies)
  const curr     = Object.keys(currencies)[0];
  const currSymb = Object.values(currencies)[0].symbol;
  const langArr = Object.values(languages);
  const langs = langArr.length > 1 
            ? (<h3>Languages: {langArr.join(", ")}</h3>) 
            : (<h3>Language: {langArr[0]}</h3>)
  return (
    <div>
      <img src={flags.svg} alt={name.common} height="100px" width="150px"/>
      <h3>Name: {name.common}</h3>
      <h3>Capital: {capital}</h3>
      {langs}
      <h3>Population: {population}</h3>
      <h3>Currency: {curr} ({currSymb})</h3>
      <br />
      <br />
    </div>
  )
}

class App extends Component {
    state = {
      data: [],
    }
    
    componentDidMount(){
      this.fetchCountryData()
    }
    fetchCountryData = async () => {
      const url = "https://restcountries.com/v3.1/region/europe?fields=name,currencies,languages,flags,population,capital"
      try {
        const response = await fetch(url)
        const data = await response.json()
        this.setState({data})
      } catch (error) {
        console.log(error)
      }
    }
    render() {
      return (
        <div className='App'>
          <h1>Fetch and Axios</h1>
          <div>
            <h2>There are {this.state.data.length} countries in Europe.</h2>
            <div>
              {this.state.data.map((country)=>(<Country key={country.name.common} country={country}/>))}
            </div>
          </div>
        </div>
      )
    }
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)