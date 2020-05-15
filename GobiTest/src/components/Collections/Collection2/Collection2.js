import React from 'react';

import './Collection2.css';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';

const Collection2 = () => {
  return (
    <div className="collection2Container">
      <img className="coll2Image1" src={image1} alt={20} />
      <img className="coll2Image2" src={image2} alt={21} />
    </div>
  );
};

export default Collection2;
