import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  function handleClick(e) {
    alert("I am clicked");
  }
  function handleMouseOver() {
    alert("Para per mouse hai");
  }
  function handleInputChange(e) {
    console.log("The value in the input has been changed: " + e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Writing custom behaviour
    alert("Form has been submitted");
  } 
  return (
    <>
    {/* This is called as immediate invocation.
    This will be executed whenever the component is rendered (or) the page is refreshed even without clicking it. */}
    <button onClick={alert("Button clicked")}>
      Click me
    </button>
    {/* Instead we should write 
    Comment the above one to observe it correctly.*/}
    <button onClick={()=>{alert("Button clicked")}}>
      Click me
    </button>

    {/* <form onSubmit={handleSubmit} >
      <input
        placeholder="Type something here...."
        class="input"
        name="text"
        type="text"
        onChange={(e) => {handleInputChange(e)}}
      />
      <button type='submit' className='button'>Submit</button>
    </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border:"2px solid black",color:"red"}} >I am para</p> */}

      

      {/* <button onClick={handleClick} className='button'>
        Click me
      </button> */}
      
    </>
  )
}

export default App
