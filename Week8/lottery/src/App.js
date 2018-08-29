import React, { Component } from 'react';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        {/* anything but string will have to use brackets to turn into js expression */}
        <Lottery numBalls={4} />
      </div>
    );
  }
}

export default App;
