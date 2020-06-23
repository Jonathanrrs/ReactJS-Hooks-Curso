import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//Enviando formularios
const Form = () => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');

  const sendForm = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    setTitle('');
    setBody('');
    console.log(json)
  })
    
  }

  return (
    <form onSubmit={(ev) => sendForm(ev)}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" value={title} id="title" onChange={(ev) => setTitle(ev.target.value)}></input>
      </div>
      <div>
        <label htmlFor="body">Publicación</label>
        <textarea id="body" value={body}onChange={(ev) => setBody(ev.target.value)}></textarea>
      </div>
      <input type="submit" value="Enviar"></input>
    </form>
  )
}

const App = () => {
  return <div><Form/></div>
}




export default App;