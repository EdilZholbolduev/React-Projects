import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import NotFound from './components/NotFound'

function App() {
  const [name, setName] = useState('zh.e')

  const hover = () => {
    setName('Zholbolduev Edil')
  }

  const hoverOut = () => {
    setName('zh.e')
  }

  return (
    <Router>
      <div className="container">
        <nav className="container-inner">
          <div className="right-nav">
            <p className="logo" onMouseEnter={hover} onMouseLeave={hoverOut}>
              {name}
            </p>
          </div>
          <div className="left-nav">
            <ul className="class-box">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <a href="https://github.com/EdilZholbolduev">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zhlbldv">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="inner-content">
          <Routes>
            <Route path="/contacts" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
