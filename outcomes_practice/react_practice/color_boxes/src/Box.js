import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="box" style={{ backgroundColor: this.props.color }}>
        {this.props.color}
      </div>
    );
  }
}

export default Box;
