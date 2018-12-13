import React, { Component } from 'react';
import BoxContainer from './BoxContainer';
import './App.css';

class App extends Component {
  changeColor = () => {
    // pick one box at random
    // change that boxes color to a random color
  };

  render() {
    return (
      <div className="App">
        {/* box container component */}
        <BoxContainer />
      </div>
    );
  }
}

export default App;
