import React from 'react'
import Header from '../../components/header/Header'
import './Profile.css'
function Profile() {
    return (
    <>
        <Header/>
<div className="profile">
        <header>
            <i className="fa fa-bars" aria-hidden="true"></i>
        </header>
  <main>
    <div className="profile__row">
      <div className="profile__Left col-lg-4">
        <div className="profile__Photo-left">
          <img className="profile__Photo" src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          <div className="profile__Active"></div>
        </div>
        <h4 className="profile__Name">Jane Ddcs</h4>
        <p className="profile__Info">Industrial Chemistry</p>
        <p className="profile__Info">jane.Ddcs@example.com</p>
        <div className="profile__Stats row">
          <div className="profile__Stat col-xs-4" style={{paddingRight: "50px;"}}>
            <p className="profile__Number-stat">3.62</p>
            <p className="profile__Desc-stat">CGPA</p>
          </div>&nbsp;&nbsp;
          <div className="profile__Stat col-xs-4">
            <p className="profile__Number-stat">8</p>
            <p className="profile__Desc-stat">Course</p>
          </div>&nbsp;&nbsp;
          <div className="profile__Stat col-xs-4" style={{paddingLeft: "50px;"}}>
            <p className="profile__Number-stat">21</p>
            <p className="profile__Desc-stat">Total Course Offered</p>
          </div>
        </div>
        <p className="profile__Desc"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt atque saepe molestias. Quae facilis atque modi illo. Blanditiis placeat voluptatum neque enim</p>
        <div className="profile__Social">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
          <i className="fa fa-pinterest-square" aria-hidden="true"></i>
          <i className="fa fa-tumblr-square" aria-hidden="true"></i>
        </div>
      </div>
      <div className="profile__Right col-lg-8">
        <ul className="profile__Nav">
          <li>Profile</li>
          <li>Courses</li>
          <li>Tests</li>
          <li>Settings</li>
        </ul>
        <span className="profile__Follow">Course Registraion</span>
        <div className=" row profile__Gallery">
          
        </div>
      </div>
      </div>
  </main>
 </div>
         
</>
    )
}

export default Profile
