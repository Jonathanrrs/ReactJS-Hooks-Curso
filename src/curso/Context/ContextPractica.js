import React  from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './Button';

const themes = {
  'dark': {
    backgroundColor: 'black',
    color: 'white'
  },
  'light': {
    backgroundColor: 'white',
    color: 'black'
  }
}

export const ThemeContext = React.createContext();

const App = () => {
  return (
    <div>
      <ThemeContext.Provider value= {themes.dark}>
      <Button />
      </ThemeContext.Provider>
    </div>
  )
}


export default App;
