import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideData } from "./SlickerData";
// import { SlideData } from "./SlickerData";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="Sliders">
        {SlideData?.map(({ image, id }) => (
          <div key={id}>
            <img src={image} />
          </div>
        ))}
      </Slider>
      <img className="right-side_img" src="https://onemg.gumlet.io/image/upload/w_480,h_200,,a_ignore,q_auto,f_auto/v1658308419/w0rxba5cko2hzw3cbs5l.png" />
    </div>
  );
};

export default SimpleSlider;