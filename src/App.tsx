import { useState } from 'react'
import './App.css'


function App() {
  const [cart, setCart] = useState({
    discount : .1,
    items: [
      {id: 1, title: 'Product1', quantity: 1},
      {id: 2, title: 'Product2', quantity: 1}
    ]
  })

  const handleClick = () =>{
    setCart({
      ...cart,
      items: cart.items.map(item => item.id === 1?{...item, quantity: item.quantity+1}:item)
    })
  }
  return (
    <>
    {cart.items.map(item => <p>{item.title} {item.quantity}</p>)}
    <button onClick={handleClick}>Update!</button>
    </>
  )
}

export default App
