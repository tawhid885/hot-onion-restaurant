import React from 'react';
import "./Cart.css";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const handleShipping=()=>{
        navigate("/shipping");
    }
    return (
        <div>
            <h2>this is cart page</h2>
            <button onClick={handleShipping}>go to shipping</button>
        </div>
    );
};

export default Cart;