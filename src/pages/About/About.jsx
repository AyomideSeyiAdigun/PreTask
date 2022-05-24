import React from 'react'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import './About.css'
function About() {
    return (
    <div>
        <Header/>

    <div className="about-section">
    <h1>About Us Page</h1>
    <p className="about__Info">  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo odit in commodi magni eligendi pariatur iusto amet.
  .</p>
    
    </div>
<h2 style={{textAlign:"center"}}>Our Team</h2> 
      <Card name="Lsfd Asef" email="Lsfd@example.com" position="Manager" image="https://pngimg.com/uploads/dolphin/dolphin_PNG71371.png"/>
      <Card name="Yoptsr Xjyst  " email="Yoptsr@example.com" position="Art Director" image="https://pngimg.com/uploads/dolphin/dolphin_PNG71371.png"/>
      <Card name="Mswredf Gfsdei" email="Mswredf@example.com" position="Song Writer" image="https://pngimg.com/uploads/dolphin/dolphin_PNG71371.png"/>
    </div>
    )
}

export default About
