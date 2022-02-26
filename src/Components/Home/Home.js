import React, {useState, useEffect} from 'react';
import Menutitle from '../Menutitle/Menutitle';
import "./Home.css";


const Home = () => {
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        const url = `./Data/allmeal.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setMeals(data))
    }, []);

    console.log("api call here", meals)
    return (
        <div className='home'>
            <Menutitle></Menutitle>
            <div className="main">
                <div className="row">
                    {
                        meals.map(meal=>{
                            const {name, des, price, img} = meal;
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card-container">
                        <div className="card-body my-card" style={{width: "13rem", margin:"35px"}}>
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

export default Home;