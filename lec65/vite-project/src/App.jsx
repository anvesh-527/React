import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name,setName] = useState("");
  return (
    <div>
      <p>The name of the variable inside the parent is {name}</p>
      {/* Giving access to the child components to acces the name and also to update the name(using the setName function) */}
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      <Card title="Card3" name={name} setName={setName} />
      {/* Any change we make here are also accessible in the parent(Changes in the parent also) */}

    </div>
  )
}

export default App
