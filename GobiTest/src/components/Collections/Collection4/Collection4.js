import React from 'react';

import './Collection4.css';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.svg';
import image5 from '../Collection3/images/image5.svg';

const Collection1 = () => {
  return (
    <div className="collection4Container">
      <p className="coll4Txt">男套衫</p>
      <img className="coll4Image1" src={image1} alt={36} />
      <img className="coll4Image2" src={image2} alt={37} />
      <img className="coll4Image3" src={image3} alt={38} />
      <img className="coll4Image4" src={image4} alt={39} />
      <p className="coll4BotTxt">查看所有产品</p>
      <img className="coll4Image5" src={image5} alt={40} />
    </div>
  );
};

export default Collection1;
