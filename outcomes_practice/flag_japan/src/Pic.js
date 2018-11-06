import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
  Box is going to be a styled component designed to wrap an image/
   * The radius is 50% if the 'round' prop is passed (it acts like
     a boolean flag here).
   * Since we want the image to be a square or circle, the height
     and width are set to the same prop, 'size', which is a number.
 */
const Box = styled.div`
  border-radius: ${props => (props.round ? '50%' : '0%')};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  box-sizing: border-box;
  margin: 50px;
  ${'' /* centering the image within the div */} display: flex;
  justify-content: center;
`;

// style the image?
const Img = styled.img`
  height: auto;
  max-width: 100%;
  ${'' /* in order to maintain aspect ratio, will cut off some picture though, but will keep it centered */} object-fit: cover;
`;

/* 
  Box can and should have prop types and default props just 
   like your other normal React components!
*/
Box.propTypes = {
  size: PropTypes.number,
  round: PropTypes.bool
};

Box.defaultProps = {
  size: 200,
  round: false
};

/*
 Pic is a composite of our box (styled div), wrapping an image.
  Notice it passes its 'size' and 'round' props directly through
  to the styled component 'Box', while the imgSrc gets passed to
  the img element.
*/
const Pic = props => {
  return (
    <Box size={props.size} round={props.round}>
      <Img src={props.imgSrc} />
    </Box>
  );
};

Pic.propTypes = {
  imgSrc: PropTypes.string,
  size: PropTypes.number,
  round: PropTypes.bool
};

Pic.defaultProps = {
  imgSrc: 'https://www.rithmschool.com/assets/team/whiskey.jpg'
};

export default Pic;
