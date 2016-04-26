import React from 'react';

const ImageDetail = (props) => {
  // props.image => this is the image object
  // props.image.title
  // props.image.link

  return (
    <li>
      <img src={props.image.link} />
      {props.image.title}
    </li>
  );
};

export default ImageDetail;
