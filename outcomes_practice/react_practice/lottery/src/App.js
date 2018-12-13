import React, {Component} from 'react';
import './App.css';
import Lottery from './Lottery';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Lottery/>
          <Lottery numBalls={4} maxNum={10} title="Mini Daily" />
        </div>
    );
  }
}

export default App;
