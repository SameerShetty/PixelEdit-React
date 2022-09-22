import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const Carousel = ({ Feeds }) => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    nextArrow: <BiRightArrow />,
    prevArrow: <BiLeftArrow />,
  };
  return (
    <div className="Carousel-wrapper">
      <Slider {...settings}>
        {Feeds.map((item) => (
          <div key={item.id}>
            <FaRegUserCircle className="Carousel-wrapper-icon" />
            <p>{item.msg}</p>
            <h2>{item.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
