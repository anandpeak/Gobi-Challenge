import React from 'react';

import './Footer.css';
import Line from './images/line.svg';
import FbLogo from './images/fb.svg';
import instaLogo from './images/insta.svg';

const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="footerAboutTxt">关于戈壁羊绒</p>
      <p className="footerAboutTxt1">戈壁羊绒历史</p>
      <p className="footerAboutTxt2">新闻</p>

      <p className="footerPolicyTxt">隐私政策</p>
      <p className="footerPolicyTxt1">服务条款</p>
      <p className="footerPolicyTxt2">隐私政策</p>

      <p className="footerFollowTxt">关注我家</p>
      <p className="footerFollowTxt1">Facebook</p>
      <p className="footerFollowTxt2">Instagram</p>
      <img className="fbLogo" src={FbLogo} alt={50} />
      <img className="instaLogo" src={instaLogo} alt={50} />

      <p className="footerCustomerTxt">客户关怀</p>
      <p className="footerCustomerTxt1">联系我们</p>
      <p className="footerCustomerTxt2">羊绒护理</p>

      <img className="footerLine" src={Line} alt={50} />
      <p className="copyRightLogo">© 2020 戈壁羊绒 Gobi Cashmere China </p>
    </div>
  );
};

export default Footer;
