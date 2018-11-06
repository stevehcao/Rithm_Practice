import styled from 'styled-components';
/* 
  making components by referencing the styled wrappers for them.
   styled.div is a function that wraps around a React div element.
   The CSS is done in a string in normal kebab-case!
*/
const Rectangle = styled.div`
  height: 300px;
  width: 450px;
  margin: 100px auto;
  border: 1px solid black;
`;

export default Rectangle; // exported like a normal component
