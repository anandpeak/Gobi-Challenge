import React from 'react';

import './Header.css';
import GobiLogo from './GobiLogo.svg';
import dropMenu from './DropMenu.svg';
import cashmereLogo from './Cashmere.svg';
import Navigation from './Navigations/Navigation';
import FindLogo from './Ellipse19.svg';
import Ellipse1 from './Ellipse1.svg';
import Bag from './Bag.svg';
import HeartLogo from './Heart.svg';

function Header() {
  return (
    <div className="containerHeader">
      <img className="headerGobiLogo" src={GobiLogo} alt={1} />
      <img className="dropMenu" src={dropMenu} alt={2}></img>
      <img className="cashmereLogo" src={cashmereLogo} alt={3} />
      <img className="findLogo" src={FindLogo} alt={4} />
      <img className="bagLogo" src={Bag} alt={5} />
      <img className="Ellipse1" src={Ellipse1} alt={6} />
      <img className="HeartLogo" src={HeartLogo} alt={7} />
      <p className="languageSelective">语言选择</p>
      <p className="searchWord">请输入搜索的关键词</p>
      <div className="recT241"></div>
      <Navigation />
    </div>
  );
}

export default Header;
