import React from "react";
import Cards from "../Cards/Cards";
import "./Body.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fashion from "./Clothes.jpg"
import Electronics from "./Electronics.jpg"
import Jewellery from "./Jewellery.jpg"
import Ring from "./Rings.jpg"
import Shoes from "./Shoes.jpg"
import Suites from "./Suites.jpg"

function Body({color, change}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };



  return (
    <div className="Body-holder">
      <div className="Slider">
        <Slider {...settings}>
          <div className="Slider-div">
            <h2>GET CLOTHES</h2>
            <img className="slider-img" src={Fashion} alt= "Fashion image"/>
          </div>
          <div className="Slider-div">
          <h2>GET ELECTRONICS</h2>
          <img className="slider-img" src={Electronics} alt="Electronics image"/>
          </div>
          <div className="Slider-div">
          <h2>GET JEWELLERY</h2>
          <img className="slider-img" src={Jewellery} alt="Jewellery image"/>
            
          </div>
          <div className="Slider-div">
          <h2>GET RINGS</h2>
          <img className="slider-img" src={Ring} alt="Ring image"/>
           
          </div>
          <div className="Slider-div">
          <h2>GET SHOES</h2>
          <img className="slider-img" src={Shoes} alt="Shoes image"/>
           
          </div>
          <div className="Slider-div">
          <h2>GET SUITES</h2>
          <img className="slider-img" src={Suites} alt="Suites image"/>

          </div>
        </Slider>
      </div>
      <Cards theme={color}/>
    </div>
  );
}

export default Body;
