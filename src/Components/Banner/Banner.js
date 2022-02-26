import React from 'react';
import "./Banner.css";
import banner from "../../img/bannerbackground.png";

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="banner goes here"/>
        </div>
    );
};

export default Banner;