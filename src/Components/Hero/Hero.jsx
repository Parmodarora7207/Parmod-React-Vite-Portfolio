import React from 'react';
import "./Hero.css"
import profile_img from "./pic3.jpeg"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <img src={profile_img}  />
        <h1><span>I m Parmod Kumar,</span>Node JS <br /> Developer based in INDIA.</h1>
        <p>I am a Node Js Developer from Shahabad Markanda,Haryana</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
               Connect With Me </AnchorLink>
               </div>
               <div className="hero-resume">My Resume</div>
               </div>
    </div>
  )
}

export default Hero