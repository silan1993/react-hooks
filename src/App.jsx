import { useState } from 'react'

import './App.css'
import UseStateApp from './userState.jsx' 

function App() {

  const [person, setPerson] = useState({
    name: 'silan',
    year :2025,
    age:32
  })

    const [showUserStateApp, setShowUserStateApp] = useState(false);


  const changeAge = (direction) => {
    setPerson((pers) => {
    return {...person,age: person.age+direction,year:person.year+direction}
  })
}
  return (
    <>
      <h1>My name is {person.name}</h1>
      <h1>My age is {person.age} on year {person.year}</h1>
      <button onClick={()=>changeAge(-1)}>Prev Year</button>
      <button onClick={() => changeAge(1)}>Next Year</button>
      <br/>
      <br/>
     <button onClick={() => setShowUserStateApp(true)}>Next Example</button>
      {showUserStateApp && <UseStateApp />}
    </>
  )
}

export default App
