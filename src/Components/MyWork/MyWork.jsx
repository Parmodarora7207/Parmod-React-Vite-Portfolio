import React from 'react'
import "./MyWork.css"
import theme_pattern from './about.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import work1 from "./work1.svg"
import work2 from "./work2.svg"
import work3 from "./work3.svg"
import work4 from "./work4.svg"
import work5 from "./work5.svg"
import work6 from "./work6.svg"


const MyWork = () => {
  return (
 <div className="mywork" id='work'>
    <div className="title-box">
    <h1>My latest work</h1>
    <img src={theme_pattern}></img>
    </div>
    <div className="mywork-container">
        <img src={work1} />
        <img src={work2} />
        <img src={work3} />
        <img src={work4} />
        <img src={work5} />
        <img src={work6} />
    </div>
    <div className="mywork-showmore">
<p>Show More</p>
<FontAwesomeIcon icon={faArrowAltCircleRight} />
    </div>
 </div>

  )
}

export default MyWork