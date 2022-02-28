import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Menutitle from '../Menutitle/Menutitle';
import "./Breakfast.css";

const Breakfast = () => {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        const url = `./Data/breakfast.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setMeals(data))
    }, []);

    const handleDetail=(key)=>{
        const url = `/details/${key}`;
        navigate(url)
    }

    return (
        <div className='home'>
            <Banner></Banner>
            <Menutitle></Menutitle>
            <div className="main">
                <div className="row">
                    {
                        meals.map(meal=>{
                            const {tag, name, des, price, img} = meal;
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card-container">
                        <div className="card-body my-card" onClick={()=>handleDetail(tag)} style={{width: "13rem", margin:"35px"}}>
                            <img src={img} className="card-img-top" alt="meal"/>
                                <div className="card-body ">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{des.slice(0, 44)}</p>
                                    <h3>${price}</h3>
                                </div>
                        </div>
                        </div>
                    </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Breakfast;