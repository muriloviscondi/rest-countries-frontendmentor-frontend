import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

export default function Country() {

  return (
    <>
      <div className="button-back">
        <a className="light-mode-elements" href="/"><FiArrowLeft className="button-back__icon" />Back</a>
      </div>
    </>
  );
};
