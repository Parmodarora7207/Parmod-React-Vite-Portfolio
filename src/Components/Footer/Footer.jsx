import React,{useState}from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    const [result, setResult] =useState("");
    const onsubmit = async (event) => {
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
  <div className="footer" id='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
            
            <p>I am a Node Js Developer from Shahabad Markanda,Haryana.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
            <FontAwesomeIcon icon={faUser} />
            <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="fotter-subscribe" onSubmit={onsubmit}>
                Subscribe
            </div>
        </div>
    </div>

        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ 2024 Parmod Kumar. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
  </div>
  )
}


export default Footer