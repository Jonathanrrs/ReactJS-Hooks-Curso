import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Sorpresa from './Sorpresa';


const App = () => {
  const [showSopresa, setShowSorpresa] = useState(false);
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
