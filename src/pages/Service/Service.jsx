import React from 'react'
import Header from '../../components/header/Header'
import './Service.css'
function Service() {
  return (
 <>
    <Header/>
    <section className="service">
      <div className="service__Row">
        <h2 className="service__Section-heading">Our Services</h2>
      </div>
      <div className="service__Row">
        <div className="service__Column">
          <div className="service__Card">
            <div className="service__Icon-wrapper">
              <i className="fas fa-hammer"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="service__Column">
          <div className="service__Card">
            <div className="service__Icon-wrapper">
              <i className="fas fa-brush"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="service__Column">
          <div className="service__Card">
            <div className="service__Icon-wrapper">
              <i className="fas fa-wrench"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="service__Column">
          <div className="service__Card">
            <div className="service__Icon-wrapper">
              <i className="fas fa-truck-pickup"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="service__Column">
          <div className="service__Card">
            <div className="service__Icon-wrapper">
              <i className=" fas fa-broom"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="service__Column">
          <div className="service__Card">
            <div className="service__Icon-wrapper">
              <i className="fas fa-plug"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
 </>
  )
}

export default Service
