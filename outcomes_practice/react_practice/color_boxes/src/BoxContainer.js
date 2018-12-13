import React, { Component } from 'react';
import Box from './Box';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 16,
    colors: [
      'PeachPuff',
      'CadetBlue',
      'AliceBlue',
      'Chartreuse',
      'FireBrick',
      'Honeydew',
      'NavajoWhite',
      'OrangeRed',
      'SpringGreen',
      'DodgerBlue',
      'Plum',
      'Turquoise',
      'Thistle'
    ]
  };

  constructor(props) {
    super(props);
    // create boxes and set state with callback
    this.state = {
      boxes: Array.from({ length: props.numBoxes }, () =>
        this.choose(props.colors)
      )
    };
  }
  //this.state.boxes = ["DodgerBlue", "OrangeRed",... etc]
  // function to choose a random color
  choose = arr => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  handleClick = () => {
    // get random box to change the color of
    let idx = Math.floor(Math.random() * this.props.numBoxes);

    // change the state
    this.setState(st => {
      let boxes = [...st.boxes];
      boxes[idx] = this.choose(this.props.colors);
      return { boxes };
    });
  };

  render() {
    const boxComponents = this.state.boxes.map((color, i) => {
      return <Box key={i} color={color} />;
    });

    return (
      <div className="BoxContainer">
        {/* map a bunch of boxes or map beforehand */}
        {boxComponents}
        <button onClick={this.handleClick}>Change color of one box</button>
      </div>
    );
  }
}

export default BoxContainer;
