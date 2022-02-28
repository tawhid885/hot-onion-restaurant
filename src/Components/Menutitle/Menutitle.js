import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Menutitle.css";
const Menutitle = () => {
    const navigate = useNavigate();
    const redirect_breakfast = "/breakfast";
    const redirect_lunch = "/lunch";
    const redirect_dinner = "/dinner";

    const breakfastControl=()=>{
        navigate(redirect_breakfast);
    }


    const lunchControl=()=>{
        navigate(redirect_lunch);
    }

    const dinnerControl=()=>{
        navigate(redirect_dinner);
    }
    return (
        <div>
            <div className="menu-title">
                    <p onClick={breakfastControl}>Breakfast</p>
                    <p onClick={lunchControl}>Lunch</p>
                    <p onDoubleClick={dinnerControl}>Dinner</p>
            </div>
        </div>
    );
};

export default Menutitle;