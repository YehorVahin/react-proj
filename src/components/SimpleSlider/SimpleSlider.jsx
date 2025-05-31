import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div><img src="../img/bracelet-slider.jpg" alt="" /></div>
        <div><img src="../img/bracelet-slider.jpg" alt="" /></div>
        <div><img src="../img/bracelet-slider.jpg" alt="" /></div>
        <div><img src="../img/bracelet-slider.jpg" alt="" /></div>
        <div><img src="../img/bracelet-slider.jpg" alt="" /></div>
      </Slider>
    </div>
  )
}
