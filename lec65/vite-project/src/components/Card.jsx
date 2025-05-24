import React from 'react'

const Card = (props) => {
  return (
    <div>
        {props.title}
        <br />
      Enter you name 
      <br />
      <input type="text" onChange={(e)=>{
        props.setName(e.target.value);
      }} />
      <p>The name of the variable inside the child is {props.name} </p>
      <br />
    </div>
  )
}

export default Card
