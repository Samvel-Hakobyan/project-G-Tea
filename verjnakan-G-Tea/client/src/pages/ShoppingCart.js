// import React, {useEffect, useState} from 'react';
// import Wrapper from "../components/Wrapper";
// import {Helmet} from "react-helmet";
// import {useSelector} from "react-redux";
//
// function ShoppingCart(props) {
//     const cart = useSelector((state) => state.cart)
//     return (
//         <div>
//             <Wrapper>
//                 <Helmet>
//                     <meta charSet="utf-8" />
//                     <title>Shopping Cart</title>
//                 </Helmet>
//                 <div className="container">
//                     <br/><br/>
//                     <h2>My Shopping Cart</h2>
//
//                     {/*{cart.cartItems.lenght}*/}
//                     {/* <div className="itemsBox">*/}
//                     {/*     <h5 className={'items'}>Items</h5>*/}
//                     {/*     <h5 className={'Quantity'}>Quality</h5>*/}
//                     {/*     <h5 className={'PriceTot'}>Price</h5>*/}
//                     {/*     <h5 className={'Total'}>Total</h5>*/}
//                     {/* </div>*/}
//                     {/* <hr/>*/}
//                     {/* <div className={'itemList'}>*/}
//                     {/*     <h5 className='cart-list-item__name'></h5>*/}
//                     {/*     <div className="qualityItem cart-item-div qty-wrap">*/}
//                     {/*         <button type="button" className="button-cart" >+</button>*/}
//                     {/*         <span className="cart-list-item__count qty0">1</span>*/}
//                     {/*         <button type="button" className="button-cart">- </button>*/}
//                     {/*     </div>*/}
//                     {/*     <div className="priceItem cart-item-div">*/}
//                     {/*         <h5 className="priceItemList"><span> $</span></h5>*/}
//                     {/*     </div>*/}
//                     {/*     <div className="deleteItem cart-item-div">*/}
//                     {/*     <button>*/}
//                     {/*         <ImCross className={"cart-list-item__delete" }/>*/}
//                     {/*     </button>*/}
//                     {/*     </div>*/}
//                     {/* </div>*/}
//                     {/*<hr/>*/}
//                     {/* <div className='subtotal_div'>*/}
//                     {/*     <div className="subtotal_price">*/}
//                     {/*         <h5 className={'totalPrice'}>TOTAL: </h5>*/}
//                     {/*         <h5><span> $</span></h5>*/}
//                     {/*     </div>*/}
//                     {/* </div>*/}
//                     <fieldset>
//                         <div className="a">
//                             <d>1</d>
//                             <legend><span>Address for shipping and billing</span></legend>
//                         </div><br/>
//                         <div className="form-row">
//                             <div className="field inline">
//                                 <label htmlFor="firstName"><b>*</b>First name</label>
//                                 <div>
//                                     <input type="text" id="firstName" name="first_name" placeholder="*First name"
//                                            className="checkout_form"/>
//                                 </div>
//                             </div>
//                             <div className="field inline">
//                                 <label htmlFor="lastName"><b>*</b>Last name</label>
//                                 <div>
//                                     <input type="text" id="lastName" name="last_name" placeholder="*Last name"
//                                            className="checkout_form"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="field inline">
//                                 <label htmlFor="street"><b>*</b>Street</label>
//                                 <div>
//                                     <input type="text" id="street" name="street" placeholder="*Street"
//                                            className="checkout_form"/>
//                                 </div>
//                             </div>
//                             <div className="field inline">
//                                 <label htmlFor="house_number"><b>*</b>House number</label>
//                                 <div>
//                                     <input type="number" id="house_number" name="house_number" placeholder="*House number"
//                                            className="checkout_form"/>
//                                 </div>
//                     {/*        </div>*/}
//                     {/*    </div>*/}
//                     {/*    <div className="form-row">*/}
//                     {/*        <div className="field inline">*/}
//                     {/*            <label htmlFor="city"><b>*</b>City</label>*/}
//                     {/*            <div>*/}
//                     {/*                <input type="text" id="city" name="city" placeholder="*City"*/}
//                     {/*                       className="checkout_form"/>*/}
//                     {/*            </div>*/}
//                     {/*        </div>*/}
//                     {/*        <div className="field inline">*/}
//                     {/*            <label htmlFor="apartment"><b>*</b>Address letter</label>*/}
//                     {/*            <div>*/}
//                     {/*                <input type="text" id="apartment" name="apartment" placeholder="*Address letter"*/}
//                     {/*                       className="checkout_form"/>*/}
//                     {/*            </div>*/}
//                     {/*        </div>*/}
//                     {/*    </div>*/}
//                     {/*    <div className="form-row">*/}
//                     {/*        <div className="field inline">*/}
//                     {/*            <label htmlFor="postcode"><b>*</b>Postcode</label>*/}
//                     {/*            <div>*/}
//                     {/*                <input type="text" id="postcode" name="postcode" placeholder="*Postcode"*/}
//                     {/*                       className="checkout_form"/>*/}
//                     {/*            </div>*/}
//                     {/*        </div>*/}
//                     {/*        <div className="field inline">*/}
//                     {/*            <label htmlFor="country" ><b>*</b>Country</label>*/}
//                     {/*            <div>*/}
//                     {/*                <select id="country" name="country">*/}
//                     {/*                    <option value="AT">Austria</option>*/}
//                     {/*                    <option value="AM">Armenia</option>*/}
//                     {/*                    <option value="BE">Belgium</option>*/}
//                     {/*                    <option value="BG">Bulgaria</option>*/}
//                     {/*                    <option value="HR">Croatia</option>*/}
//                     {/*                    <option value="CY">Cyprus</option>*/}
//                     {/*                    <option value="CZ">Czech Republic</option>*/}
//                     {/*                    <option value="DK">Denmark</option>*/}
//                     {/*                    <option value="FI">Finland</option>*/}
//                     {/*                    <option value="FR">France</option>*/}
//                     {/*                    <option value="DE">Germany</option>*/}
//                     {/*                    <option value="GR">Greece</option>*/}
//                     {/*                    <option value="HU">Hungary</option>*/}
//                     {/*                    <option value="IT">Italy</option>*/}
//                     {/*                    <option value="LU">Luxembourg</option>*/}
//                     {/*                    <option value="MT">Malta</option>*/}
//                     {/*                    <option value="NL">Netherlands</option>*/}
//                     {/*                    <option value="PL">Poland</option>*/}
//                     {/*                    <option value="PT">Portugal</option>*/}
//                     {/*                    <option value="RO">Romania</option>*/}
//                     {/*                    <option value="RU">Russian</option>*/}
//                     {/*                    <option value="SK">Slovakia</option>*/}
//                     {/*                    <option value="SI">Slovenia</option>*/}
//                     {/*                    <option value="ES">Spain</option>*/}
//                     {/*                    <option value="SE">Sweden</option>*/}
//                     {/*                </select>*/}
//                     {/*            </div>*/}
//                     {/*        </div>*/}
//                     {/*    </div>*/}
//                     {/*        <div className="form-row">*/}
//                     {/*            <div className="field inline">*/}
//                     {/*                <label htmlFor="region"><b>*</b>Region</label>*/}
//                     {/*                <div>*/}
//                     {/*                    <input type="text" id="region" name="region" placeholder="*Region"*/}
//                     {/*                           className="checkout_form"/>*/}
//                     {/*                </div>*/}
//                     {/*            </div>*/}
//                     {/*            <div className="field inline">*/}
//                     {/*                <label htmlFor="phone"><b>*</b>Phone</label>*/}
//                     {/*                <div>*/}
//                     {/*                    <input type="tel" id="phone" name="phone" placeholder="*Phone"*/}
//                     {/*                           className="checkout_form"/>*/}
//                     {/*                </div>*/}
//                     {/*            </div>*/}
//                     {/*        </div>*/}
//                     {/*        <div className="form-row">*/}
//                     {/*            <div className="field inline">*/}
//                     {/*                <label htmlFor="email"><b>*</b>Email</label>*/}
//                     {/*                <div>*/}
//                     {/*                    <input type="email" id="email" name="email" placeholder="*Email"*/}
//                     {/*                           className="checkout_form" />*/}
//                     {/*                </div>*/}
//                     {/*            </div>*/}
//                     {/*            <div className="field inline">*/}
//                     {/*                <label htmlFor="guest">&nbsp;</label>*/}
//                     {/*                <div>&nbsp;</div>*/}
//                     {/*            </div>*/}
//                     {/*        </div>*/}
//                     {/*        <div className="form-row">*/}
//                     {/*            <div className="field inline">*/}
//                     {/*                <label htmlFor="email"><b>*</b>Confirm email address</label>*/}
//                     {/*                <div>*/}
//                     {/*                    <input type="email" id="confirm_email" name="confirm_email" placeholder="*Confirm email address"*/}
//                     {/*                           className="checkout_form"/>*/}
//                     {/*                </div>*/}
//                     {/*            </div>*/}
//                     {/*        </div>*/}
//                     {/*</fieldset>*/}
//                     {/*<br/><br/>*/}
//                     {/*<hr/>*/}
//                     {/*<br/><br/>*/}
//             {/*        <div className="payments">*/}
//             {/*<fieldset>*/}
//             {/*    <div className="a">*/}
//             {/*        <d>2</d>*/}
//             {/*           <legend className={'payment-method'}><span>SELECT PAYMENT METHOD</span></legend>*/}
//             {/*    </div>*/}
//             {/*    <div className="payment_methods">*/}
//
//             {/*        <div className="payment_method_first methods">*/}
//             {/*            <input type="radio" name="radio" id="radio1" className="radio"/>*/}
//             {/*            <label htmlFor="radio1">Credit Card</label>*/}
//             {/*        </div>*/}
//             {/*        <br/>*/}
//             {/*        <div className="payment_method_second methods">*/}
//             {/*            <input type="radio" name="radio" id="radio2" className="radio" disabled/>*/}
//             {/*            <label>Checkout with PayPal</label>*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//
//             {/*    <br/><br/><br/>*/}
//
//
//             {/*         </fieldset>*/}
//             {/*            <fieldset className={'special-request'}>*/}
//             {/*                <div className="a">*/}
//             {/*                    <legend className={'special'}><span>SPECIAL REQUEST</span></legend>*/}
//             {/*                </div>*/}
//             {/*                <div className="payment_methods">*/}
//             {/*                    <div className="payment_method_first methods">*/}
//             {/*                        <textarea name="textarea" id="textarea" className="textarea"/>*/}
//             {/*                    </div>*/}
//             {/*                </div>*/}
//
//             {/*            </fieldset>*/}
//             {/*            <br/>*/}
//             {/*    </div>*/}
//             {/*        <div className="agrees">*/}
//             {/*            <div>*/}
//             {/*            <div className="tacbox">*/}
//             {/*                <input id="checkbox" type="checkbox" className="checkboxAgree"/>*/}
//             {/*                <label > I agree with the terms and conditions.</label>*/}
//             {/*            </div>*/}
//
//             {/*            <div className="tacbox">*/}
//             {/*                <input id="checkbox" type="checkbox" className="checkboxAgree"/>*/}
//             {/*                <label > I have read and I accept the Privacy policy.</label>*/}
//             {/*            </div>*/}
//             {/*            </div>*/}
//             {/*            <div className="buttons_payments">*/}
//             {/*                <Link to='/products'>*/}
//             {/*                    <div className="buttons_payment">*/}
//             {/*                        <AiOutlineArrowLeft className={'left-icon-back-shop'}/>*/}
//             {/*                        <span>back to shop</span>*/}
//             {/*                     </div>*/}
//             {/*                </Link>*/}
//             {/*                <Link to='/payment'>*/}
//             {/*                     <div className="buttons_payment2">*/}
//             {/*                        <span>FINISH ORDER</span>*/}
//             {/*                        <AiOutlineArrowRight className={'right-icon-back-shop'}/>*/}
//             {/*                     </div>*/}
//             {/*                </Link>*/}
//             {/*            </div>*/}
//             {/*        </div>*/}
//
//                 </div>
//             </Wrapper>
//         </div>
//     );
//   }
//
//
// export default ShoppingCart;