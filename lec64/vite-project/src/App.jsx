import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count,setCount] = useState(0);
  /* <Card>
  Anything written in between this is called children
  </Card> */

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>

      <Button increment={handleClick} text="Click me">
        <h2>{count}</h2>
      </Button>

      {/* <Card name="Anvesh">
        <h1>Best Web Dev Course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children="Mai ek children huin" >
        <p>Hehe</p>
        {/* Hehe Overrides children="Mai ek children huin" */}

        {/* If hehe is not written, children="Mai ek children huin" will be displayed */}
      {/* </Card>  */}
      
    </div>
  )
}

export default App
