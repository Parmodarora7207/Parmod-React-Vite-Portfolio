import React,{useState} from 'react'
import "./Contact.css"
import theme_pattern from './about.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [result, setResult] =useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9fa60f81-697a-4179-9d02-d2e8a01d3ede");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
        //   setResult("Form Submitted Successfully");
        alert(data.message)
        event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} />

        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                <FontAwesomeIcon icon={faEnvelope} /><p>parmodkumar7207@gmail.com</p>
                </div>
                <div className="contact-detail">
                <FontAwesomeIcon icon={faPhone} /><p>+91 99915-73471</p>
                </div>
                <div className="contact-detail">
                <FontAwesomeIcon icon={faLocationDot} /><p>Kalsana , Haryana</p>
                </div>
            </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' required/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' required />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact