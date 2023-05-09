import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  const [game, setGame] = useState({
    id: 1,
    player:{
      name : "Mohamed"
    }
  })

  const handleClick = () =>{
    setGame({
      ...game,
      player : {
        ...game.player,
        name : "Kaif"
      }
    })
  }
  // const [bugs, setBugs] = useState([
  //   {id: 1, title: 'Bug1', fixed: false},
  //   {id: 2, title: 'Bug2', fixed: false}
  // ])

  // const handleClick = () =>{
  //   // setBugs(bugs.map(bug => bug.id === 1?{...bug, fixed: true}: {...bug}));
  //   // console.log(bugs);
  //   setBugs(produce(draft =>{
  //     const bug = draft.find(bug => bug.id === 1);
  //     if(bug) 
  //       bug.fixed = true;
  //   }))
  // }
  return (
    <>
      {/* <h1>Hey Kaif!</h1>
      {bugs.map(bug => <p>{`${bug.id} is ${bug.fixed}`}</p>)}
      <button onClick={handleClick}>Click Me</button> */}
      {/* <NavBar CartItems={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() =>{setCartItems([])}}/> */}
      <h1>Hi {game.player.name}!</h1>
      <button onClick={handleClick}>Change</button>
    </>
  )
}

export default App
