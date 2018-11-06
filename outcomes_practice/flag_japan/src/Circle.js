import styled from 'styled-components';

/* 
  This variable can easily be interpolated to a styled component
  because they are defined using template strings
 */
const red = '#ad232f';

const Circle = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background-color: ${red};
  margin: 50px auto;
`;

export default Circle;
