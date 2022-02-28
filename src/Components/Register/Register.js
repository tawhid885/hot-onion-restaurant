import React from 'react';
import "./Register.css";
import logo from "./../../img/logo2.png";
import { useForm } from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";



const Register = () => {
    const navigate = useNavigate();


    const {setName, setEmail, setPassword, error, setError, createNewUser, updateProfileInfo} = useAuth();


    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    


    const onSubmit = ({displayName, email, password, confirm_password}) => {
        console.log("triggered!")
        console.log(displayName, email)
        console.log(typeof setName)
        setName(displayName);
        setEmail(email);
        setPassword(password);
        if(password !== confirm_password){
            setError("password must be same")
        }
        else{
            createNewUser()
            .then(result=>{
                console.log("user created, ", result.user);
                updateProfileInfo();
                navigate("/login");
            })
            .catch(error=>{
                console.log(error.message);
                setError(error.message);
            })
            reset();
        }

    };


    return (
        <div className="register">
            <div className="form-container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="field-container">
                    <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-field" placeholder="Name" {...register("displayName")} />

                        <input className="form-field" type="email" placeholder='Email'{...register("email", { required: true })} />

                        <input className="form-field" type="password" placeholder='Password'{...register("password", { required: true })} />

                        <input className="form-field"
                        type="password" placeholder='Confirm Password'{...register("confirm_password", { required: true })} />
    
                        {(errors.email || errors.password || errors.confirm_password) && <span className='error-class'>This field is required</span>}
                        {<span className='error-class'>{error}</span>}

                        <input type="submit" value="Signup" className='btn my-btn' />
                    </form>
                    <br />
                    <p>Already have an account? <NavLink to="/login" className={()=>"pointer"}>Login</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Register;