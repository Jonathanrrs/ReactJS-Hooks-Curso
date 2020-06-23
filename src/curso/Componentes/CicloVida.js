import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';

//Ciclo de vida del componente
const Button = () => {
    //Aquí no debe haber efectos secundarios: cualquier afectacion a elementos fuera del componente
    useEffect(() => { //Recibe una funcion que se ejecutará en cada render y este podria tener efectos secundarios
      console.log('Me ejecuté');
      return () => {
        console.log('Adiós');
        
      }
    },[]);
    return <button>Enviar</button>
  }
  
  const App = () => {
    const [showButton, setShowButton] = useState(true);
    return (
      <div>
        <button onClick={() => setShowButton(false)}>Eliminar botón</button>
        <div>
          {showButton && <Button/>}
        </div>
      </div>
    )
  }