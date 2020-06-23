import React, {  useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//Ejercicios con el state
const Button = () => {
  const [conteo, updateConteo] = useState(0); //Nos regresa un arreglo con 2 variable, es un hhok
  return (
    <div>
      <p>Presionado: {conteo}</p>
      <button onClick={() => updateConteo(conteo+1)}>Click me</button>
    </div>
  )
}

const App = () => {
  return <div><Button/> </div>
}