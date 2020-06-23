import React, { useState, useEffect, useRef } from 'react';
//import logo from './logo.svg';
import './App.css';
//Enviando formularios
const Form = ({showed}) => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');

  const firstInput = useRef(); //Es el hook que debemos utilizar cuando por alguna razon requiramos acceder directamente al DOM por react, recordar que las updates del dom debemos dejar que react se encargue de ellas

  useEffect(() => {
    //Actualizar el DOM es efecto secundario
    if(showed) {
      console.log(firstInput);
      firstInput.current.focus();
      
    }
 
    
  }, [showed])

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
        <input type="text" value={title} id="title" onChange={(ev) => setTitle(ev.target.value)} ref={firstInput}></input>
      </div>
      <div>
        <label htmlFor="body">Publicación</label>
        <textarea id="body" value={body}onChange={(ev) => setBody(ev.target.value)}></textarea>
      </div>
      <input type="submit" value="Enviar"></input>
    </form>
  )
}

const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Mostrar formularios</button>
      {show && <Form showed={show}/>}
    </div>
  )
}

const App = () => {
  return <div><Accordion/></div>
}




export default App;
