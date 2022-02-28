import React from 'react';
import "./Footer.css";
import footer_img from "../../img/logo2.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='first-part'>
                <div className="footer-img">
                    <img src={footer_img} alt="" />
                </div>
                <div className='main-li-container'>
                    <div>
                        <li>About online food</li>
                        <li>Read our blog</li>
                        <li>Sign up to deliver</li>
                        <li>Add your restaurant</li>
                    </div>
                    <div>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all cities</li>
                        <li>Restaurant near me</li>
                    </div>
                </div>
            </div>
            {/* another part  */}
            <div className='second-part'>
                <div><small>Copyright &#169; 2022 onion food</small></div>
                <div className='terms'>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Pricing</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;