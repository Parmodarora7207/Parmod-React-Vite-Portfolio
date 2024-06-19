import React from 'react';
import "./About.css";
import profile_img from './pic3.jpeg'
import theme_pattern from './about.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5,faCss3,faReact,faJs,faBootstrap,faNode} from '@fortawesome/free-brands-svg-icons'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title"><h1>About me</h1>
        <img src={theme_pattern}  /></div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project. </p>
                </div>

                <div className="about-skills">
                    <div className="about-skill">
                       {<p><FontAwesomeIcon icon={faHtml5} /> HTML5</p> } <hr className='hr' />
                    </div>
                    <div className="about-skill">
                       {<p><FontAwesomeIcon icon={faCss3}/> CSS3</p> }<hr className='hr' />
                    </div>
                    <div className="about-skill">
                       {<p><FontAwesomeIcon icon={faReact} /> REACT JS</p> }<hr className='hr' />
                    </div>
                    <div className="about-skill">
                       {<p><FontAwesomeIcon icon={faJs} /> JAVASCRIPT</p> }<hr className='hr' />
                    </div>
                    <div className="about-skill">
                       {<p><FontAwesomeIcon icon={faBootstrap} /> BOOTSTRAP</p> }<hr className='hr' />
                    </div>
                    <div className="about-skill">
                       {<p><FontAwesomeIcon icon={faNode} /> NODE JS</p> }<hr className='hr' />
                    </div>
                </div>
            </div>

        </div>
            <div className="about-achievements">
                <div className="about-achievement">
                <h1>10+</h1> <p> Year of experience</p></div><hr className='hr' />
            <div className="about-achievement">
                <h1>90+</h1> <p>Projects Completed</p></div><hr className='hr' />
            <div className="about-achievement">
                <h1>15+ </h1><p>Happy Clients</p></div>
                </div>
    </div>
  )
}

export default About