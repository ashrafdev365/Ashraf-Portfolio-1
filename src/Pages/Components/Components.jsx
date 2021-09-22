import React, { useState, useEffect } from "react";
import "./components.css";
import { Images } from "../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export const Button = ({ name, link }) => {
  return (
    <>
    <NavLink exact to={`/${link}`}>
    <button className="contact_btn">{name}</button>
    </NavLink>
      
    </>
  );
};


export const HomeProjects = ({ img }) => {
  return (
    <>
      <img src={`assetes/Images/${img}`} alt='projects' className='home_pro_img' />
    </>
  );
};


export const LanguageName = ({ name, img, id }) => {
  return (
    <>
      <div className="language_name_div" id={id}>
        <img src={`assetes/Icons/${img}`} alt={name} />
        <h1>{name}</h1>
      </div>
    </>
  );
};

export const Proof = () => {
  const [imageIndex, setimageIndex] = React.useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="arrow_right">
        <img
          src="assetes/Icons/Vector4.png"
          alt="right arrow"
          className="arrow_right"
        />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="arrow_left">
        <img
          src="assetes/Icons/Vector4.png"
          alt="left arrow"
          className="arrow_left"
        />
      </div>
    );
  };

  let settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    // centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setimageIndex(next),
  };
  return (
    <>
      <div className="proof_div">
        <Slider {...settings}>
          <div className="proof"></div>
          <div className="proof"></div>
          <div className="proof"></div>
        </Slider>
      </div>
    </>
  );
};
