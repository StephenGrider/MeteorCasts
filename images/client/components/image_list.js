// Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'http://dummyimage.com/600x400' },
  { title: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
  { title: 'Mug', link: 'http://dummyimage.com/600x400' }
];

// Create our component
const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail image={image} />
  });

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export our component
export default ImageList;
