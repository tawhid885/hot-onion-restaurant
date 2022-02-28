import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import logo from "./../../img/logo2.png";
import { useForm } from 'react-hook-form';
import useAuth from "./../../Hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();


    const {setUser, setEmail, setPassword, setError, signInWithEmail} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";

    const onSubmit = ({email, password}) => {
        console.log(email, password);
        setEmail(email);
        setPassword(password);
        signInWithEmail()
        .then(result=>{
            const user = result.user;

            // local storage control 
            const info = {name: user.displayName, uid:user.uid}
            localStorage.setItem('user',JSON.stringify(info));

            setUser(user);
            console.log("user successfully logged in! , ", result.user);
            setError("");
            reset();
            navigate(redirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    };

    return (
        <div className="register">
            <div className="form-container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="field-container">
                    <form className="my-form" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-field" 
                        type="email" placeholder='Email'{...register("email", { required: true })} />

                        <input className="form-field" 
                        type="password" placeholder='Password' {...register("password", { required: true })} />
    
                        {(errors.email || errors.password) && <span className='error-class'>This field is required</span>}

                        <input type="submit" value="Login" className='btn my-btn' />
                    </form>
                    <br />
                    <p>Don't have an account? <NavLink to="/register" className={()=>"pointer"}>Signup</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;