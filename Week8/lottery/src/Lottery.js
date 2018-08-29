// need to import all components we are using
import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  constructor(props) {
    super(props);
    console.log('Lottery constructor');
    // the map takes a function so you can just map the function
    this.state = {
      values: Array.from({ length: props.numBalls }).map(this.getRandomVal)
    };
    console.log('values =', this.values);
  }
  // setting default num of balls
  static defaultProps = {
    numBalls: 6
  };
  //get random value from 1-20
  getRandomVal() {
    return Math.floor(Math.random() * 20) + 1;
  }
  chooseValues() {
    console.log('chooseValues');
    // use this.setState(obj) with you want to change.
    // pass in an object with keys and values of what you want to change
    this.setState({
      values: Array.from({ length: this.props.numBalls }).map(this.getRandomVal)
    });
  }
  render() {
    // 1) one way of doing this.  just make an array of the components
    // const balls = [];
    // for (let i = 0; i < this.props.numBalls; i++) {
    //   balls.push(<Ball />);
    // }
    console.log('Lottery render');
    return (
      <div className="Lottery">
        <p>Today's Winners:</p>
        {/* cannot use for! only things that are on the right
        side of the = sign.  ONLY js expressions, usually will use .map loop */}
        {/* {balls} */}
        {/* 2) method two and prob easier to map over certain length of array */}
        <div>{this.state.values.map(v => <Ball value={v} />)}</div>
        <button onClick={evt => this.chooseValues()} className="Lottery-button">
          Choose!
        </button>
        {/* you can just output an array */}
      </div>
    );
  }
}

export default Lottery;
