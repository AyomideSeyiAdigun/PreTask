import React from 'react'
import './Webnar.css'
function WebnarPost( ) {
  return (
    <div className='post'>
     
 
            <img src= "data:image/jpeg;base64,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" alt="pic" />
         
    <div className="post__Info">
        <div className="post__Categories">
             Health
        </div>
        <span className="post__Title"><strong>Lorem Ipsunm Authen  </strong></span>  
        <hr />
        <span className="post__Date">{new Date().toDateString()}</span>

        <p className="post__Description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas maxime mollitia dicta sequi voluptate tempora ipsum doloribus consequuntur facere dignissimos fuga, debitis fugit nulla? Amet laboriosam facere quos suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere autem consequatur, optio, eligendi, nulla nobis perspiciatis deleniti nisi alias cupiditate at in beatae corrupti. Quis debitis doloribus voluptate fugit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, facilis voluptatum at delectus voluptates sit, assumenda explicabo nostrum quia voluptate ab nesciunt dicta soluta veniam saepe atque cum odit consequuntur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis, tempore quis est officiis porro placeat minus velit culpa, ipsam excepturi odio. Aperiam obcaecati, atque modi culpa quo rem delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas maxime mollitia dicta sequi voluptate tempora ipsum doloribus consequuntur facere dignissimos fuga, debitis fugit nulla? Amet laboriosam facere quos suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere autem consequatur, optio, eligendi, nulla nobis perspiciatis deleniti nisi alias cupiditate at in beatae corrupti. Quis debitis doloribus voluptate fugit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, facilis voluptatum at delectus voluptates sit, assumenda explicabo nostrum quia voluptate ab nesciunt dicta soluta veniam saepe atque cum odit consequuntur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis, tempore quis est officiis porro placeat minus velit culpa, ipsam excepturi odio. Aperiam obcaecati, atque modi culpa quo rem delectus.</p>
    </div>
</div>
  )
}

export default WebnarPost