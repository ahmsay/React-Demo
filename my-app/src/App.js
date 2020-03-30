import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>asdzxc</h1>
        <Ninjas name="Ryuk" age="2535435" belt="Black"/>
        <br/>
        <Ninjas name="Ryu" age="2" belt="White"/>
      </div>
    );
  }
}

export default App;
