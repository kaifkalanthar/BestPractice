import { useState } from 'react'
import './App.css'


function App() {
  const [pizza, setPizza] = useState({
    name : 'Spicy Pepperoni',
    toppings : ['Mushroom']
  })
  const handleClick = () =>{
    setPizza({
      ...pizza,
      toppings:[...pizza.toppings, 'Chicken']
    })
  }
  return (
    <>
    <ul>
      {pizza.toppings.map(t => <li>{t}</li>)}
    </ul>
      <button onClick={handleClick}>Add!</button>
    </>
  )
}

export default App
