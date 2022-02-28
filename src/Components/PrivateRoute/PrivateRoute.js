import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    // local storage work 
    const user_info_st =localStorage.getItem('user');
    const user_info = JSON.parse(user_info_st);
    const uid = user_info.uid;

    const location = useLocation();
    
    return uid? children : <Navigate to="/login" state={{from: location.pathname}}/>;
};

export default PrivateRoute;