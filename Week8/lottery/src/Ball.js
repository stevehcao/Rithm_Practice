import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
  state = { active: false };
  changeColor() {
    this.setState({ active: !this.state.active });
  }
  render() {
    // convention that the outer most item will have a class
    // that is named after the component itself
    console.log('Ball render');
    return (
      <div
        className="Ball"
        onClick={evt => this.changeColor()}
        style={{ backgroundColor: this.state.active ? 'gold' : 'teal' }}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Ball;
