// first import react and react-dom packages
import React,{useState, useEffect} from 'react'
import ReactDOM  from 'react-dom/client'

// Day 23 - Fetch and Axios with Hooks
const Country = ({
  country : {name, capital, flags,languages, population, currencies}
}) => {
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
const App = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () =>{
    const url = 'https://restcountries.com/v3.1/region/europe?fields=name,flags,currencies,languages,capital,population'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <h2>There are {data.length} countries in the api</h2>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country key={country.name.common}country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)