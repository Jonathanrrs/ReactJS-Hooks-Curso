import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Sorpresa from './Sorpresa';
//import hello from './hello'

const App = () => {
  const [showSopresa, setShowSorpresa] = useState(false);
  /*useEffect(() => {
    import ('./hello').then(mod => mod.default())
  }, []);*/
  return (
    <div>
      <button onClick={(ev) => setShowSorpresa(true)}>Mostrar Sopresa</button>
      {
        showSopresa && <Sorpresa/>
      }

    </div>
  )
}




export default App;
