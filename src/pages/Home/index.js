import React, { useState, useEffect } from 'react';
import { FiMoon, FiSearch } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css'

export default function Country() {
  const [country, setCountry] = useState([]);


  useEffect(() => {
    api.get().then( response => {
      setCountry(response.data)
    })
  }, []);

  /*
  api({
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/all',
    responseType: 'json'
  })
    .then(function (response) {
      console.log(response.data)
    });
    */

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

  return (
    <>
      <nav className="light-mode-elements">
        <div className="nav__title">
          <h1>Where in the world?</h1>
        </div>
        <div className="nav__dark-light-mode" onClick={darkLightMode}>
          <FiMoon className="nav__moon" size={16} />
          <span id="dark-light-mode">Dark Mode</span>
        </div>
      </nav>
      <main>
        <section className="search-bar">
          <div className="classification-search">
            <div className="content-input light-mode-elements">
              <FiSearch className="icon-search light-mode-elements" />
              <input className="light-mode-elements" type="text" value="Search for a country" />
            </div>

            <div className="content-select">
              <select className="light-mode-elements" name="filter-region" id="filter-region">
                <option className="light-mode-elements" value="0">Filter by Region</option>
                <option className="light-mode-elements" value="1">Africa</option>
                <option className="light-mode-elements" value="2">America</option>
                <option className="light-mode-elements" value="3">Asia</option>
                <option className="light-mode-elements" value="4">Europe</option>
                <option className="light-mode-elements" value="5">Oceania</option>
              </select>
            </div>
          </div>
        </section>

        <section className="description-countries">

        {country.map(country => (
          <div className="content-flag light-mode-elements">
            <div className="flag">
              <img src={country.flag} alt="flag county" />
            </div>
            <div className="country-description">
              <h2>{country.name}</h2>
              <p><strong>Population: </strong>{Number(country.population)}</p>
              <p><strong>Region: </strong>{country.region}</p>
              <p><strong>Capital: </strong>{country.capital}</p>
            </div>
          </div>
        ))}  
        </section>
      </main>
    </>
  );
};
