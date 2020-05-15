import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Slider from './components/Slider/Slider.js';
import Collection1 from './components/Collections/Collection1/Collection1';
import Collection2 from './components/Collections/Collection2/Collection2';
import Collection3 from './components/Collections/Collection3/Collection3';
import Collection4 from './components/Collections/Collection4/Collection4';
import Collection5 from './components/Collections/Collection5/Collection5';
import Collection6 from './components/Collections/Collection6/Collection6';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AnnouncementBar />

      <Header />
      <Slider />

      <p className="mainTxt">
        春意弥漫空中！是的，现在您就可以穿着全新羊绒服上街了！具有轻盈柔和质感的#全新春夏系列，将在这个不一样的季节为您带来春夏独特的温暖和崭新体验！
      </p>

      <Collection1 />
      <Collection2 />
      <Collection3 />
      <Collection4 />
      <Collection5 />
      <Collection6 />

      <Footer />
    </div>
  );
}

export default App;
