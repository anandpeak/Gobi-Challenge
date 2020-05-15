import React from 'react';

import './Collection6.css';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.svg';
import image5 from './images/image5.svg';
import image6 from './images/image6.svg';

const Collection6 = () => {
  return (
    <div className="collection6Container">
      <img className="coll6Image1" src={image1} alt={18} />
      <img className="coll6Image2" src={image2} alt={19} />
      <img className="coll6Image3" src={image3} alt={20} />
      <img className="coll6Image4" src={image4} alt={22} />
      <img className="coll6Image5" src={image5} alt={23} />
      <img className="coll6Image6" src={image6} alt={24} />

      <p className="coll6Txt">精纺系列</p>
      <p className="coll6Img2Txt">dress with drawstrings</p>
      <p className="coll6ShoppingTxt">SHOP NOW</p>
    </div>
  );
};

export default Collection6;
