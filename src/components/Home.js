import React from 'react'
import '../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faJs, faHtml5, faBootstrap, faCss3Alt, faSass, faJava} from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <div className='main'>
      <div className='main-inner'>
         <h1>Edil Zholbolduev</h1>
         <div className='inner-block-1'>
            <p className='bio'> 
               Hey, I am striving to become a Software Developer.
               I have a strong commitment to ongoing learning and a continuous desire to expand my skills as a developer.
               I pay attention to details and excel in resolving complex problems.
               I hope for further cooperation
            </p>  
         </div>   
      </div>
      <div className='main-inner2'>
         <h2>Skills:</h2>
         <div className='skills'>
         <FontAwesomeIcon icon={faReact} spin size='6x' style={{color: "#00d5ff",}} />
         <FontAwesomeIcon icon={faJs} fade size='6x' style={{color: "#e3f028",}} />
         <FontAwesomeIcon icon={faBootstrap} size='6x' fade style={{color: "#eb59ee",}} />
         <FontAwesomeIcon icon={faCss3Alt} size='6x' fade style={{color: "#005eff",}} />
         <FontAwesomeIcon icon={faHtml5} fade size='6x' style={{color: "#fb9a4b",}} />
         <FontAwesomeIcon icon={faSass} fade size="6x" style={{color: "#ff055d",}} />
         <FontAwesomeIcon icon={faJava} fade size="6x" style={{color: "#ffc933",}} />
         </div>
      </div>
    </div>
  )
}

export default Home
