import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log(
      '%c Component Did Mount Ran',
      'color: goldenrod; font-size: 24px;'
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    console.log(
      '%c Should Component Update Ran',
      'color: thistle; font-size: 24px;'
    );
    console.log(`current count: ${this.state.count}`);
    console.log(`next count: ${nextState.count}`);

    if (nextState.count > 10) {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    console.log(
      '%c Component Did Update Ran',
      'color: salmon; font-size: 24px;'
    );
    console.log(`current count: ${this.state.count}`);
    console.log(`previous count: ${prevState.count}`);
  }

  increaseCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    debugger;
    console.log('%c RENDERED', 'color: peru; font-size: 24px;');
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Count Up</button>
      </div>
    );
  }
}

export default App;
