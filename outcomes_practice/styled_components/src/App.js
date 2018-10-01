import React, { Component } from 'react';
import styled from 'styled-components';

// template tag function
// a string and a function at the same time styled.nav(where css attribute lives)
// const StyledApp = styled(App)``;
const name = `Hello my name is ${name}`;
const PRIMARY_COLOR = 'cadetblue';
const SECONDARY_COLOR = 'salmon';
const StyledButton = styled.button`
  height: 60px;
  background-color: ${props =>
    props.primary ? PRIMARY_COLOR : SECONDARY_COLOR};
`;

const StyledNav = styled.nav`
  background-color: ${props => props.backgroundColor};

  li {
    color: blachedalmond;
  }
  li:hover {
    cursor: pointer;

    #contact {
      color: chartreuse;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: 'peru'
    };
  }

  handleClick = () => {
    const newColor = this.state.navColor === 'peru' ? 'blue' : 'peru';
    this.setState({ navColor: newColor });
  };

  render() {
    return (
      <div>
        {/* navbar */}
        <StyledNav backgroundColor={this.state.navColor}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>About</li>
            <li>Bio</li>
          </ul>
        </StyledNav>
        {/* you can also just put primary it will be shorthand */}
        <StyledButton primary={true} onClick={this.handleClick}>
          Primary button click me
        </StyledButton>
        <StyledButton> NOT PRIMARY </StyledButton>
      </div>
    );
  }
}

export default App;
