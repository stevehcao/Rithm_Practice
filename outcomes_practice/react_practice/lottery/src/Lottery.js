import React, {Component} from 'react';
import './Lottery.css';
import Ball from './Ball.js';


/** A lottery can be any number of balls, all with random values. */

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = {nums: Array.from({length: props.numBalls})};
    this.handleClick = this.handleClick.bind(this);
  }

  /** generate a new set of random numbers */

  generate() {
    this.setState(st => ({
      nums: st.nums.map(
          n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
  }

  /** click to re-generate nums */

  handleClick(evt) {
    this.generate();
  }

  render() {
    return (
        <section className="Lottery">
          <h1>{this.props.title}</h1>
          <div>
            {this.state.nums.map(n => <Ball num={n}/>)}
          </div>
          <button onClick={this.handleClick}>Generate</button>
        </section>
    );
  }
}


export default Lottery;