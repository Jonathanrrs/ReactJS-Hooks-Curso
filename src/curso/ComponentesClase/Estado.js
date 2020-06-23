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
  }
  render() {
    return (
    <div>
      <p>contador: {this.state.contador}</p>
      <button onClick={() => this.setState({contador: this.state.contador+1})}>Sumar</button>
    </div>
    )
  }
}


export default App;
