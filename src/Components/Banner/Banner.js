import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div>
                <div className='banner-info'>
                    <h1>Best food waiting for your belly</h1>
                </div>
                <div className="banner-search">
                <input type="text" className='banner-input'  placeholder='Search food items' />
            <button className='btn my-banner-btn'>Search</button>
                </div>
            
            </div>
        </div>
    );
};

export default Banner;