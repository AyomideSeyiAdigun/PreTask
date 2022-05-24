import React from 'react'
import Header from '../../components/header/Header'
import './Dashboard.css'
function Dashboard() {
 
  
  let currentActive= 1;
  const  handleNext=()=>{
      currentActive++;
      if(currentActive > document.querySelectorAll('.dashboard__Circle').length){
          currentActive =document.querySelectorAll('.dashboard__Circle').length;
      }
      document.querySelectorAll('.dashboard__Circle').forEach((circle, idx)=>{
        if(idx < currentActive){
         circle.classList.add('active')
        } 
    })
    update()
        
  }
   
 const  update=()=>{
    
  
      const actives = document.querySelectorAll('.active');
    //   document.getElementById('progress').style.width=(((document.querySelectorAll('.active').length -1) / (document.querySelectorAll('.dashboard__Circle').length-1))*100 + '%');
  
      if(currentActive == 1){
        document.getElementById('prev').disabled= true;
        
      }else if(currentActive === document.querySelectorAll('.dashboard__Circle').length){
        document.getElementById('next').disabled= true;
      }else
      {
        document.getElementById('prev').disabled= false;
        document.getElementById('next').disabled= false;
      }
  }

    return (
     <>
        <Header/>
        <h2 style={{textAlign:"left",marginTop:'40px'}}>University Dashbord</h2> 
        <div className="dashboard">
          <div className="dashboard__Progress-container">
              <div className="dashboard__Progress"  id="progress"></div>
              <div className="dashboard__Circle active">1</div>
              <div className="dashboard__Circle">2</div>
              <div className="dashboard__Circle">3</div>
              <div className="dashboard__Circle">4</div>
          </div>
          <div className="dashboard__List">
            <ul >
              <li>Fees</li>
              <li>COA</li>
              <li>Visa Process</li>
              <li>Visa Decision</li>
            </ul>
          </div>
          <button className="dashboard__Btn" id="next" onClick={handleNext} >Next</button>
      </div>
    </>
    )
}

export default Dashboard
