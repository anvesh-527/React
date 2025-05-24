import React from 'react'
import { useState,useEffect } from 'react';

const MultiEffectComponent = () => {
    const [count,setCount] = useState(0);
    const [seconds,setSeconds] = useState(0);

    useEffect(() => {
        console.log("Count changed: ",count);
    }, [count]);
    // Side-effect logic will run only when count is changed.

    useEffect(() => {
        const intervalId = setInterval(()=> {
            console.log("setInterval Started");
            setSeconds(prevSeconds => prevSeconds+1);
        },1000);

        return () => {
            console.log("Time to stop");
            clearInterval(intervalId);
        }
    }, []);
    // It will run only on the first render.

    
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={()=> {setCount(count+1)}}>
        Increment Count
      </button>
      <h2>Seconds: {seconds} </h2>
    </div>
  )
}

export default MultiEffectComponent
