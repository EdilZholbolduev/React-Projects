import React from 'react';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMessage, faHouse} from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <div className='cMain'>
        <div className='cMain-inner'>
          <div className='info'>
            <p className='head'>Contact details</p>
            <ul className='me'>
              <li>
              <FontAwesomeIcon icon={faPhone} fade size='2x' style={{color: "#d8fb2d",}} /> +48 452 068 007
              </li>
              <li>
              <FontAwesomeIcon icon={faMessage} fade size='2x' style={{color: "#54d956",}} /> tashtan841@gmail.com
              </li>
              <li>
              <FontAwesomeIcon icon={faHouse} fade size='2x'  style={{color: "#fff829",}} /> Zwiecku Landowsku 15/3
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Contact;
