import React from 'react';

import './Frame1.css';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import line from './images/line.svg';

const Frame1 = () => {
  return (
    <div className="frameContainer">
      <img className="smallImage" src={image1} alt={10}></img>
      <img className="bigImage" src={image2} alt={11} />
      <img className="frame1Line" src={line} alt={12} />
      <p className="frame1Txt">初秋</p>
      <p className="smallImageTxt">关于戈壁羊绒</p>
      <p className="bigImageTxt">关于戈壁羊绒</p>
    </div>
  );
};

export default Frame1;
