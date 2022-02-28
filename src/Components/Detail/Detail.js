import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Menutitle from '../Menutitle/Menutitle';
import "./Detail.css";

const Detail = () => {
    const {tag, id} = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState({});
    useEffect(()=>{
        const api_url = `/Data/${tag}/${id}.json`;
        fetch(api_url)
        .then(res => res.json())
        .then(data => setMeal(data))
    }, [tag, id]);

    const handleCartButton=()=>{
        navigate("/cart");
    }
    return (
        <div>
            <Menutitle></Menutitle>
            <div className='detail-menu'>
            <div className='details'>
                <h2>{meal.name}</h2>
                <p>{meal.des}</p>
                <div className='price-quantity'>
                    <h4>$ {meal.price}</h4>
                    <div className='calculation'>
                    <span className='minus'>-</span><span className='quantity'>1</span><span className='plus'>+</span>
                    </div>
                </div>
                <button className='btn cart-button' onClick={handleCartButton}>Add to cart</button>
            </div>
            <div className="menu-image-container">
                <img src={meal.img} alt="menu" />
            </div>
        </div>
        </div>
    );
};

export default Detail;