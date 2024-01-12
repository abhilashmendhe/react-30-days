// first import react and react-dom packages
import React from 'react'
import ReactDOM  from 'react-dom/client'
// import abhiImg from './images/img1.jpg'

// Mapping Arrays of objects
const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({country : {name, city}}) => {
    return (
        <div>
            <h3>{name}</h3>
            <small>{city}</small>
        </div>
    )
}

const Countries = ({countries}) => {
    console.log(countries)
    const countryList = countries.map((country) => <Country key={country.name} country={country}/>)
    console.log(countryList)
    return (
        <ul>{countryList}</ul>
    )
}

const App = () => {

    return (
    <div className='app'>
        <div>
            <h2>Countries</h2>
            <Countries countries={countries}/>
        </div>
    </div>
    )
}

const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)