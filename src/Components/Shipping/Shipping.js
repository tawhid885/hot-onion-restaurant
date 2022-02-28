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
                        type="text" placeholder='Add delivery insdivuctor'{...register("delivery_insdivuctor", { required: true })} />
    
                        {(errors.door || errors.road || errors.flat) && <span className='error-class'>This field is required</span>}

                        <input type="submit" value="Save & Continue" className='btn my-btn' />
                    </form>
                </div>
            </div>
            <div className="shipping-confirm">
                <h6>From Gulshan Plaza Restaurant GPR Arriving in 20-30 min</h6>
                <p>107 Rd No. 8</p>

                {/* pro details sdivat here  */}
                <div className="pro-details">

                    <div className="pro-image">
                        <img src={img} alt="product" />
                    </div>
                    
                    <div className="pro-detail">
                        <div>
                        <p style={{margin:"0px", padding:"0px"}}>Butter Naun</p>
                        <h4 style={{color: "red",margin:"0px", padding:"0px"}}>$ 40</h4>
                        </div>
                    </div>

                    <div className="pro-cal">
                        <span className="pro-minus">-</span>
                        <span className="pro-quantity">2</span>
                        <span className="pro-plus">+</span>
                    </div>

                </div>
                {/* pro details end here  */}

                {/* pro details sdivat here  */}
                <div className="pro-details">

                    <div className="pro-image">
                        <img src={img} alt="product" />
                    </div>
                    
                    <div className="pro-detail">
                        <div>
                        <p style={{margin:"0px", padding:"0px"}}>Butter Naun</p>
                        <h4 style={{color: "red",margin:"0px", padding:"0px"}}>$ 40</h4>
                        </div>
                    </div>

                    <div className="pro-cal">
                        <span className="pro-minus">-</span>
                        <span className="pro-quantity">2</span>
                        <span className="pro-plus">+</span>
                    </div>

                </div>
                {/* pro details end here  */}

                <div className="last-section">
                    <div className='table-grid'>
                        <div className="general">
                            <div>Subtotal</div>
                            <div>$ 320</div>
                        </div>
                        <div className="general">
                            <div>Tax</div>
                            <div>$ 5.00</div>
                        </div>
                        <div className="general">
                            <div>Delivery fee</div>
                            <div>$ 2.00</div>
                        </div>
                        <hr />
                        <div className="general">
                            <div><h4>Total</h4></div>
                            <div><h4>$ 327</h4></div>
                        </div>
                    </div>
                    <button className='btn my-pro-btn'>Placeorder</button>
                </div>
                
            </div>
        </div>
    );
};

export default Shipping;