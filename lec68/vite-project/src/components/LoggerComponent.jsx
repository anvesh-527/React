import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
const LoggerComponent = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
      console.log("Component re-rendered or count changed",count);
    });

    // The component runs on every render
    
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={()=> {setCount(count+1)}} >Increment</button>
    </div>
  )
}

export default LoggerComponent
