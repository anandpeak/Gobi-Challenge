import React from 'react';

import './Frame2.css';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import line from '../Frame1/images/line.svg';

const Frame1 = () => {
  return (
    <div className="frameContainer">
      <img className="smallImage2" src={image1} alt={10}></img>
      <img className="bigImage2" src={image2} alt={11} />
      <img className="frame2Line" src={line} alt={12} />
      <p className="frame2Txt">初秋</p>
      <p className="smallImageTxt2">关于戈壁羊绒</p>
      <p className="bigImageTxt2">关于戈壁羊绒</p>
    </div>
  );
};

export default Frame1;
