import React from 'react';
import { useForm } from 'react-hook-form';
import "./Shipping.css";
import useAuth from "./../../Hooks/useAuth";
import img from "./../../img/logo.png";

const Shipping = () => {
    const {user} = useAuth();
    console.log(user);
    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div className='shipping'>
            <div className='shipping-form'>
                <div className="edit-container">
                <h4 className='edit'>Edit Delivery Details</h4>
                </div>
            <div className="field-container">
                    <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-field" 
                        type="text" placeholder="Deliver to door" {...register("door", {required: true})} />

                        <input className="form-field" type="text" placeholder='Road No.' {...register("road", { required: true })} />

                        <input className="form-field" type="text" placeholder='Flat, suit or floor'{...register("flat", { required: true })} />

                        <input className="form-field"
                        type="text" placeholder='Business Name'{...register("business", { required: true })} />

                        <input className="form-field"
                        type="text" placeholder='Add delivery instructor'{...register("delivery_instructor", { required: true })} />
    
                        {(errors.door || errors.road || errors.flat) && <span className='error-class'>This field is required</span>}

                        <input type="submit" value="Save & Continue" className='btn my-btn' />
                    </form>
                </div>
            </div>
            <div className="shipping-confirm">
                <h6>From Gulshan Plaza Restaurant GPR Arriving in 20-30 min</h6>
                <p>107 Rd No. 8</p>

                {/* details start here  */}
                <div className="pro-details">
                    {/* img start  */}
                    <div className="pro-image-container">
                        <img src={img} alt="product" />
                    <div/>
                    {/* img end  */}
                    {/* detail start  */}
                        <div className="pro-detail">
                            <p>Butter Naun</p>
                            <h6>$ 40</h6>
                        </div>
                        {/* detail end  */}
                        {/* pro cal start  */}
                        <div className='pro-cal'>
                            <span className="pro-minus">-</span>
                            <span className="pro-quantity">2</span>
                            <span className="pro-plus">+</span>
                        </div>
                        {/* pro cal end  */}
                    </div>
                </div>
                {/* detials end here  */}
                
            </div>
        </div>
    );
};

export default Shipping;