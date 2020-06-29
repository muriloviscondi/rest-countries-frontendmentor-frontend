import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

export default function Country() {

  return (
    <>
      <section>
        <div className="button-back">
          <a className="light-mode-elements" href="/"><FiArrowLeft className="button-back__icon" />Back</a>
        </div>

        <div className="details__country-description">
          <div className="details__flag">
            <img src="https://restcountries.eu/data/bel.svg" alt="Flag country Belgium" />
          </div>

          <div className="details__content-description">
            <div className="grid-content">
              <div className="details__description">
                <h2>Belgium</h2>
                <p><strong>Native Name: </strong>België</p>
                <p><strong>Population: </strong>11319511</p>
                <p><strong>Region: </strong>Europe</p>
                <p><strong>Sub Region: </strong>estern Europe</p>
                <p><strong>Capital: </strong>Brussels</p>
              </div>

              <div className="details__description">
                <p><strong>Top Level Domain: </strong>be</p>
                <p><strong>Currencies: </strong>Euro</p>
                <p><strong>Language: </strong>Nederlands, French, German</p>
              </div>
            </div>

            <div className="details__border-countries">
              <p><strong>Border Countries: </strong>France, Germany, Netherlands</p>
            </div>

          </div>
        </div>


      </section>
    </>
  );
};
