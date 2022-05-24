import React from 'react'
import Header from '../../components/header/Header'
import './Contact.css'
function Contact() {
    return (
     <>
        <Header/>
        <div class="contact">  
  <form id="contact__Form" action="" method="post">
    <h3>Quick Contact</h3>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
    </fieldset>
     
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact__Submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
</div>
    </>
    )
}

export default Contact
