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
  render() {
    console.log(this.props);
    return <p>Hola mundo</p>
  }
}


export default App;
