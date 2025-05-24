import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ResizeComponent = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        console.log("Event listener has been added.");
        window.addEventListener("resize",handleResize);

      return () => {
        window.removeEventListener('resize',handleResize);
        console.log("The event listener on the component has been removed");
      }
    }, []);
    // It will run only on the first render.

    // If i add [windowWidth] like this it will render everytime when the windowWidth is updated. 

  return (
    <div>
      <h1>Window width: {windowWidth} </h1>
    </div>
  )
}

export default ResizeComponent
