import React from 'react';

import './Collection3.css';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.svg';
import image5 from './images/image5.svg';

const Collection3 = () => {
  return (
    <div className="collection3Container">
      <p className="coll3Txt">女套衫</p>
      <img className="coll3Image1" src={image1} alt={26} />
      <img className="coll3Image2" src={image2} alt={27} />
      <img className="coll3Image3" src={image3} alt={28} />
      <img className="coll3Image4" src={image4} alt={29} />
      <p className="coll3BotTxt">查看所有产品</p>
      <img className="coll3Image5" src={image5} alt={30} />
    </div>
  );
};

export default Collection3;
