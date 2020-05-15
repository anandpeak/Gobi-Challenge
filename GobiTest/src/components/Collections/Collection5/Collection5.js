import React from 'react';

import './Collection5.css';
import image1 from './images/smallImage.svg';
import image2 from './images/bigImage.svg';

const Collection1 = () => {
  return (
    <div className="collection5Container">
      <p className="coll5Txt">初秋 焕新 </p>
      <div className="coll5Cover"></div>
      <img className="coll5Image1" src={image1} alt={36} />
      <img className="coll5Image2" src={image2} alt={37} />
    </div>
  );
};

export default Collection1;
