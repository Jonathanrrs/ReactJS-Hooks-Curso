import React from 'react';
import './App.css';
import propTypes from 'prop-types'


class App extends React.Component {
  static defaultProps = {
    name: 'Jony'
  }
  static propTypes = {
    name: propTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
    //this.updateCounter = this.updateCounter.bind(this); //Esto puede ser para hacer el contexto pero cambiando el metodo de abajo ya no se ocupa, y eso es para no hacer de cada uno
  }

  updateCounter = () => { //Esto funciona solo con la funcion de la flecha
    this.setState({contador: this.state.contador+1})
  }

  render() {
    return (
    <div>
      <p>contador: {this.state.contador}</p>
      <button onClick={this.updateCounter}>Sumar</button>
    </div>
    )
  }
}


export default App;
