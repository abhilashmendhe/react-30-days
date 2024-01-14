// first import react and react-dom packages
import React,{Component, useState} from 'react'
import ReactDOM  from 'react-dom/client'
import catImg from './images/cat.jpg'
import dogImg from './images/dog.jpg'
// Day 21 - Intro to React Hook
// They allow you use state, life cycle methods and other React features 
// without writing a class component. If we are using hooks we can have 
// only a functional component in the entire application. 

/** State Hook
Using hooks we can access state without writing a class based component.
*/



const App = () => {
  // Declaring new state variable
  let img = dogImg;
  let ani = "dog";
  const [image, setImage] = useState(img);
  const [animal, setAnimal] = useState(ani);
  const changeAnimal = () => {
    const ima = image === dogImg ? catImg : dogImg;
    const anim = animal === "dog" ? "cat" : "dog";
    setAnimal(anim);
    setImage(ima);
  }
  return (
    <div className='App'>
      <img src={image} alt={animal} height="600px" width="800px"/>
      <button onClick={changeAnimal}>Change Animal</button>
    </div>
  )
}
const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)
root.render(<App/>)