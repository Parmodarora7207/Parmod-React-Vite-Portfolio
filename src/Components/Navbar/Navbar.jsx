import React, { useState } from 'react';
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [meu,setMenu]=useState("home")
  return (

<nav className="navbar navbar-expand-lg bg-black" id='navbar'>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link"><AnchorLink className='anchor-link' offset={50} href='#home'> Home</AnchorLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" ><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" ><AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" ><AnchorLink className='anchor-link' offset={50} href='#work'>Portfolio</AnchorLink ></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" ><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></a>
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  </div>
</nav>

  )
}

export default Navbar