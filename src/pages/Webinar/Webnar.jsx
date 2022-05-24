import React from 'react'
import Header from '../../components/header/Header'
import WebnarPost from '../../components/post/Webnar'
import './Webnar.css'
function Webnar() {
  return (
    <>
    <Header/>
    <h2 style={{textAlign:"center"}}>WEBINARS</h2> 
    <div className="webnars">
    
      <WebnarPost />
      <WebnarPost />
      <WebnarPost />
      <WebnarPost />
    </div>
    </>
  )
}

export default Webnar
