import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';



//Eventos
//Como emparejar una función para que se ejecute cuando un evento suceda sobre un elemento
const Saludo = () => {
  const [name, setName] = useState('');
  return (
    <div>
      {/* SyntheticEvent */}
      <input type="text" onChange= {(evento) => setName(evento.target.value)}></input> {/* En react no se usa addeventlistener */}
      <p>Hola {name}</p>
    </div>
  )
}

const App = () => {
  return <div><Saludo/></div>
}




export default App;
