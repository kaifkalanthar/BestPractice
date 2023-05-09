import { useState } from 'react'
import produce from 'immer'
import './App.css'

function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug1', fixed: false},
    {id: 2, title: 'Bug2', fixed: false}
  ])

  const handleClick = () =>{
    // setBugs(bugs.map(bug => bug.id === 1?{...bug, fixed: true}: {...bug}));
    // console.log(bugs);
    setBugs(produce(draft =>{
      const bug = draft.find(bug => bug.id === 1);
      if(bug) 
        bug.fixed = true;
    }))
  }
  return (
    <>
      <h1>Hey Kaif!</h1>
      {bugs.map(bug => <p>{`${bug.id} is ${bug.fixed}`}</p>)}
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
