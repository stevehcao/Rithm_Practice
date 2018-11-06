import React from 'react';
import Rectangle from './Rectangle';
import Circle from './Circle';
import Pic from './Pic';
import styled from 'styled-components';

const App = () => {
  /*
    Our styled components are immediately usable in JSX
     just like our other components since they are simply functions
     that wrap React elements.
   */
  // The Button from the last section without the interpolations
  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  // A new component based on Button, but with some override styles
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

  return (
    <div>
      {/* rectangle and circle are styled components */}
      <Rectangle>
        <Circle />
      </Rectangle>

      <Pic size={300} />
      <Pic round />
      <Pic
        round
        imgSrc={
          'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-149263578.jpg?crop=0.4444444444444445xw:1xh;center,top&resize=980:*'
        }
      />

      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  );
};

export default App;
