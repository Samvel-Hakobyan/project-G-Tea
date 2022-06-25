import React from 'react';
import Wrapper from "../components/Wrapper";
import { AiOutlineArrowRight} from 'react-icons/ai';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useForm} from "react-hook-form";

function Order(props) {
    const {register,
        formState:{errors},
        handleSubmit,
    } = useForm();

    console.log("errors", errors)
    return (
        <div>
            <Wrapper>
                <Helmet>
                   <meta charSet="utf-8" />
                   <title>Order</title>
                </Helmet>
                <div className="container">
                    <form autoComplete="on" onSubmit={handleSubmit((data)=>
                        window.location.href = '/payment'
                    )}>
                    <fieldset className={'addresShip'}>
                    <div className="a">
                        <d>1</d>
                        <legend><span>Address for shipping and billing</span></legend>
                    </div><br/>
                    <div className="form-row">

                        <div className="field inline">
                            <label htmlFor="firstName"><b>*</b>First name</label>
                            <div>
                                <input {...register("FirstName", {
                                    required: "First name is required",
                                    minLength: {
                                        value: 3,
                                        message: "First name must be atlesat 3 characters long"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "First name must be atmost 30 characters long"
                                    },
                                })}
                                       type="text"
                                       id="firstName"
                                       // name="first_name"
                                       placeholder="*First name"
                                       className="checkout_form"
                                />
                                <p className={'error'}>{errors.FirstName?.message}</p>

                            </div>
                        </div>
                        <div className="field inline">
                            <label htmlFor="lastName"><b>*</b>Last name</label>
                            <div>
                                <input {...register("LastName", {
                                    required: "Last name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Last name must be atlesat 3 characters long"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Last name must be atmost 30 characters long"
                                    },
                                })}
                                       type="text"
                                       id="lastName"
                                       // name="last_name"
                                       placeholder="*Last name"
                                       className="checkout_form"/>
                                <p className={'error'}>{errors.LastName?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="field inline">
                            <label htmlFor="street"><b>*</b>Street</label>
                            <div>
                                <input {...register("Street", {
                                    required: "Street is required",
                                    minLength: {
                                        value: 3,
                                        message: "Street must be atlesat 3 characters long"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Street must be atmost 30 characters long"
                                    },
                                })}
                                       type="text"
                                       id="street"
                                       // name="street"
                                       placeholder="*Street"
                                       className="checkout_form"/>
                                <p className={'error'}>{errors.Street?.message}</p>
                            </div>
                        </div>
                        <div className="field inline">
                            <label htmlFor="house_number"><b>*</b>House number</label>
                            <div>
                                <input {...register("HouseNumber", {
                                    required: "House number is required",
                                    pattern: {
                                        value: /^[1-9]\d*(?:[-\s]?[a-zA-Z0-9]+)?$/,
                                        message: "House number is required"
                                    },
                                })}
                                    type="text"
                                    id="house_number"
                                    // name="house_number"
                                    placeholder="*House number"
                                    className="checkout_form"/>
                                <p className={'error'}>{errors.HouseNumber?.message}</p>

                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="field inline">
                            <label htmlFor="city"><b>*</b>City</label>
                            <div>
                                <input {...register("City", {
                                    required: "City is required",
                                    minLength: {
                                        value: 3,
                                        message: "Street must be atlesat 3 characters long"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Street must be atmost 30 characters long"
                                    },
                                })}
                                       type="text"
                                       id="city"
                                       // name="city"
                                       placeholder="*City"
                                       className="checkout_form"/>
                                <p className={'error'}>{errors.City?.message}</p>

                            </div>
                        </div>
                        <div className="field inline">
                            <label htmlFor="postcode"><b>*</b>Postcode</label>
                            <div>
                                <input {...register("Postcode", {
                                    required: "Postcode number is required",
                                    pattern: {
                                        value: /^[1-9]\d*(?:[-\s]?[a-zA-Z0-9]+)?$/,
                                        message: "Postcode number is required"
                                    },
                                })}
                                       type="text"
                                       id="postcode"
                                    // name="postcode"
                                       placeholder="*Postcode"
                                       className="checkout_form"/>
                                <p className={'error'}>{errors.Postcode?.message}</p>

                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="field inline">
                            <label htmlFor="region"><b>*</b>Region</label>
                            <div>
                                <input {...register("Region", {
                                    required: "Region is required",
                                    minLength: {
                                        value: 3,
                                        message: "Region must be atlesat 3 characters long"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Region must be atmost 30 characters long"
                                    },
                                })}
                                       type="text"
                                       id="region"
                                    // name="region"
                                       placeholder="*Region"
                                       className="checkout_form"/>
                                <p className={'error'}>{errors.Region?.message}</p>

                            </div>
                        </div>
                        <div className="field inline">
                            <label htmlFor="country" ><b>*</b>Country</label>
                            <div>
                                <select id="country" name="country" >
                                    <option value="AM">Armenia</option>
                                    <option value="RU">Russian</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">

                        <div className="field inline">
                            <label htmlFor="phone"><b>*</b>Phone</label>
                            <div>
                                <input {...register("Phone", {
                                    required: "Phone is required",
                                    pattern: {
                                        value: /^\+374[1-9]{2}[0-9]{6}|^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                                        message: "Phone number is inValid"
                                    },
                                })}
                                       type="tel"
                                       id="phone"
                                       // name="phone"
                                       placeholder="*Phone"
                                       className="checkout_form"/>
                                <p className={'error'}>{errors.Phone?.message}</p>

                            </div>
                        </div>
                        <div className="field inline">
                            <label htmlFor="email"><b>*</b>Email</label>
                            <div>
                                <input {...register("Email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Email must be valid"
                                    },
                                })}
                                       type="email"
                                       id="email"
                                    // name="email"
                                       placeholder="*Email"
                                       className="checkout_form" />
                                <p className={'error'}>{errors.Email?.message}</p>

                            </div>
                        </div>
                        <div className="field inline">
                            <label htmlFor="guest">&nbsp;</label>
                            <div>&nbsp;</div>
                        </div>
                    </div>
                </fieldset>
                        <div className="payments">
                <fieldset >
                    <div className="a">
                        <d>2</d>
                           <legend className={'payment-method'}><span>SELECT PAYMENT METHOD</span></legend>
                    </div>
                    <div className="payment_methods">
                        <div className="payment_method_first methods">
                            <input {...register("Card", {
                                required: "Card is required",
                                pattern: {
                                    value: 1,
                                },
                            })}
                                   type="radio"
                                   // name="radio"
                                   id="radio1"
                                   className="radio"/>
                            <label htmlFor="radio1">Credit Card</label>
                            <p className={'error'}>{errors.Card?.message}</p>

                        </div>
                        <br/>
                        <div className="payment_method_second methods">
                            <input type="radio" name="radio" id="radio2" className="radio" disabled/>
                            <label>Checkout with PayPal</label>
                        </div>
                    </div>
                         </fieldset>
                            <fieldset className={'special-request'}>
                                <div className="a">
                                    <legend className={'special'}><span>SPECIAL REQUEST</span></legend>
                                </div>
                                <div className="payment_methods">
                                    <div className="payment_method_first methods">
                                        <textarea name="textarea" id="textarea" className="textarea"/>
                                    </div>
                                </div>

                            </fieldset>
                            <br/>
                    </div>
                        <div className="agrees">
                            <div>
                            <div className="tacbox">
                                <input
                                    {...register("agree", {
                                        required: "Please agree with the terms and conditions.",
                                        pattern: {
                                            value: 1,
                                        },
                                    })}
                                    id="checkbox"
                                    type="checkbox"
                                    className="checkboxAgree"/>
                                <label> I agree with the terms and conditions.</label>
                                <p className={'error'}>{errors.agree?.message}</p>

                            </div>

                            </div>
                            <div className="buttons_payments">
                                <Link to='/products'>
                                    <div className="buttons_payment">
                                        <AiOutlineArrowLeft className={'left-icon-back-shop'}/>
                                        <span>back to shop</span>
                                     </div>
                                </Link>
                                <button type="submit" className="buttons_payment2" >
                                    FINISH ORDER
                                    <AiOutlineArrowRight className={'right-icon-back-shop'}/>
                                </button>
                                <Link to='/payment' >
                                </Link>
                            </div>
                </div>
                    </form>
                </div>
            </Wrapper>
        </div>
    );
}

export default Order;