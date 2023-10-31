import React from 'react'
import '../css/portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
  return (
   <div className='blockFirst'>
     <div className='blockSecond'>
        <p className='bT-inner '>
          Here I would like to shortly talk about my projects:
        </p>
      <div className='blockThird'>
        <p>
          I can just put a link for github, you are able to click the <FontAwesomeIcon beatFade size='xl' icon={faGithub} style={{color: "#5cd51a",}} /> icon, and see everything including small tasks till huge-demo projects
        </p>
        <p>
        Click ➡️:
         <a href="https://github.com/EdilZholbolduev">
         <FontAwesomeIcon icon={faGithub} bounce size="4x" style={{color: "#5cd51a",}} />
        </a>
        </p>
      </div>
     </div>
   </div>
  )
}

export default Portfolio
