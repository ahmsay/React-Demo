import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas : [
      { id: 1, name: 'Ryu', age: 30, belt: 'black' },
      { id: 2, name: 'Yoshi', age: 20, belt: 'green' },
      { id: 3, name: 'Crystal', age: 25, belt: 'pink' }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Ninja List</h1>
        <Ninjas ninjas={ this.state.ninjas }/>
        <AddNinja/>
      </div>
    );
  }
}

export default App;
