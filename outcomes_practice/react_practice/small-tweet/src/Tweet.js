import React, { Component } from 'react';
import styled from 'styled-components';

// make a component

/* can have "export default" here instead of below*/ class Tweet extends Component {
  // can have state
  // can have default props
  // life cycle methods
  static defaultProps = {
    username: 'Steve'
  };

  render() {
    return (
      <div>
        <div>{this.props.username}</div>
        <div>{this.props.date}</div>
        <div className="tweetConent">{this.props.msg}</div>
      </div>
    );
  }
}

export default Tweet;
