import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const TimerComponent = () => {
    const [seconds,setSeconds] = useState(0);
    useEffect(() => {
        function update(prevSeconds) {
            return prevSeconds + 1;
        }
        
          
      const intervalId = setInterval(()=> {
        console.log("setInterval Started");
        setSeconds(update);
      },1000);
      return () => {
        console.log("Time to stop");
        clearInterval(intervalId);
        // This will be executed when the component is unmounted 
        // that is if we comment it out it will be executed.
      }
    }, []);
    // It will run only on the first render.
    
  return (
    <div>
      <h1>Seconds: {seconds} </h1>
    </div>
  )
}

export default TimerComponent
