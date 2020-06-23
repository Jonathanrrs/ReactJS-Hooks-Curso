import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

//Leyendo el valor de los controles
const Form = () => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  return (
    <form>
      <div>
        <label htmlFor="title">Titulo {title}</label>
        <input type="text" id="title" onChange={(ev) => setTitle(ev.target.value)}></input>
      </div>
      <div>
        <label htmlFor="body">Publicación {body}</label>
        <textarea id="body" onChange={(ev) => setBody(ev.target.value)}></textarea>
      </div>
      <input type="submit" value="Enviar"></input>
    </form>
  )
}

const App = () => {
  return <div><Form/></div>
}




export default App;