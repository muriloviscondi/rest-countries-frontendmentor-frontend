import React from 'react';

import Navbar from './components/Navbar/navbar'
import Routes from './routes'

import './global.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
