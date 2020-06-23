import React, { useState, Suspense } from 'react';
//import logo from './logo.svg';
import './App.css';

//React Lazy y Suspende
const Sorpresa = React.lazy(() => import('./Sorpresa'))

const App = () => {
  const [showSopresa, setShowSorpresa] = useState(false);
  return (
    <div>
      <button onClick={(ev) => setShowSorpresa(true)}>Mostrar Sopresa</button>
      {
        showSopresa && <Suspense fallback={<p>Cargando...</p>}> <Sorpresa/> </Suspense>
      }

    </div>
  )
}




export default App;
