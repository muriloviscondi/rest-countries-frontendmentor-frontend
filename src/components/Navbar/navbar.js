import React from 'react';
import { FiMoon } from 'react-icons/fi';

import './style.css'

export default function Navbar() {
  function darkLightMode() {
    const textDarkLightMode = document.querySelector('#dark-light-mode')

    const lightModeElements = document.querySelectorAll('.light-mode-elements')
    const darkModeElements = document.querySelectorAll('.dark-mode-elements')

    if (textDarkLightMode.textContent === 'Dark Mode') {
      textDarkLightMode.innerText = 'Light Mode';
      document.querySelector('body').classList.add('dark-mode-background')

      for (let modeElement of lightModeElements) {
        modeElement.classList.remove('light-mode-elements')
        modeElement.classList.add('dark-mode-elements')
      }


    } else {
      textDarkLightMode.innerText = 'Dark Mode';

      document.querySelector('body').classList.remove('dark-mode-background')

      for (let modeElement of darkModeElements) {
        modeElement.classList.remove('dark-mode-elements')
        modeElement.classList.add('light-mode-elements')
      }
    }
  }
  
  return(
    <nav className="light-mode-elements">
        <div className="nav__title">
          <h1>Where in the world?</h1>
        </div>
        <div className="nav__dark-light-mode" onClick={darkLightMode}>
          <FiMoon className="nav__moon" size={16} />
          <span id="dark-light-mode">Dark Mode</span>
        </div>
      </nav>
  )
}
