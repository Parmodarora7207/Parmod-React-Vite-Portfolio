import React from 'react'
import"./Services.css"
import theme_pattern from './about.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'


const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} />
        </div>

        <div className="services-container">
            <div className="services-format">
                <h3>01</h3>
                <h2>Web Design</h2>
                <p>Web development is the process of building, programming...</p>
                <div className="services-readmore"><p>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></p></div>
            </div>
            <div className="services-format">
                <h3>02</h3>
                <h2>Graphics design</h2>
                <p>Web development is the process of building, programming...</p>
                <div className="services-readmore"><p>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></p></div>
            </div>
            <div className="services-format">
                <h3>03</h3>
                <h2>Social Media</h2>
                <p>Web development is the process of building, programming...</p>
                <div className="services-readmore"><p>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></p></div>
            </div>
            <div className="services-format">
                <h3>04</h3>
                <h2>App Design</h2>
                <p>Web development is the process of building, programming...</p>
                <div className="services-readmore"><p>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></p></div>
            </div>
            <div className="services-format">
                <h3>05</h3>
                <h2>Digital Marketing</h2>
                <p>Web development is the process of building, programming...</p>
                <div className="services-readmore"><p>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></p></div>
            </div>
            <div className="services-format">
                <h3>06</h3>
                <h2>Content Writing</h2>
                <p>Web development is the process of building, programming...</p>
                <div className="services-readmore"><p>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></p></div>
            </div>
        </div>
    </div>
  )
}

export default Services