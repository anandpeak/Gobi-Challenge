import React from 'react';

import './Slider.css';
import Frame1 from './Frames/Frame1/Frame1';
import Frame2 from './Frames/Frame2/Frame2';
import PrevBtn from './images/prevBtn.svg';
import NextBtn from './images/nextBtn.svg';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [<Frame1 key={1} />, <Frame2 key={2} />],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.goToNextSlide();
    }, 4000);
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    console.log('working');

    if (this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector('.frameContainer').clientWidth;
  };

  render() {
    return (
      <div className="sliderContainer">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 1.45s',
          }}
        >
          {this.state.slides.map((item, i) => item)}
        </div>
        <img
          src={NextBtn}
          onClick={() => this.goToNextSlide()}
          alt={13}
          className="frameNextBtn"
        />
        <img
          src={PrevBtn}
          onClick={() => this.goToPrevSlide()}
          alt={14}
          className="framePrevBtn"
        />
      </div>
    );
  }
}

export default Slider;
