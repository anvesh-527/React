import React from 'react'
import Anvesh from '../assets/Anvesh.jpg'
import "./UserCard.css"

// As a parameter props is used to access the props and also receive the props
const UserCard = (props) => {
  return (
    // Here we are able to utilize the js syntax utility this is only called jsx
    <div className='user-container' style={props.style} >
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt="Unable to load the image" />
      <p>{props.rollno}</p>
      <p id='user-desc' >Description of {props.name}</p>
    </div>
  )
}

export default UserCard
