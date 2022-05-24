import React from 'react'
import './Card.css'
function Card({name,email,position,image}) {
  return (
    <div className="about__Column">
    <div className="about__Card">
      <img src= {image} alt={name}  />
      <div className="about__Container">
        <h2>{name}</h2>
        <p className="about__Title">{position}</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p> {email}</p>
        <p><button className="about__Button">Contact</button></p>
      </div>
    </div>
  </div>
  
  )
}

export default Card
