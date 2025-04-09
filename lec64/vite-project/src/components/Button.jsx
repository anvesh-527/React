import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.increment}>
            {props.text}
        </button>
        <div>
            {props.children}
        </div>
    </div>
    
  )
}

export default Button
