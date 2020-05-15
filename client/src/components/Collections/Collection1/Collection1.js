import React from 'react';

import './Collection1.css';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import Line from './images/line.svg';

const Collection1 = () => {
  return (
    <div className="collection1Container">
      <img className="coll1Image1" src={image1} alt={16} />
      <img className="coll1Image2" src={image2} alt={17} />
      <img className="coll1Image3" src={image3} alt={18} />
      <p className="coll1Txt1">裙装</p>
      <p className="coll1Txt2">套装</p>
      <p className="coll1Txt3">套衫</p>
      <img className="collLine1" src={Line} alt={20} />
      <img className="collLine2" src={Line} alt={20} />
      <img className="collLine3" src={Line} alt={20} />
    </div>
  );
};

export default Collection1;
