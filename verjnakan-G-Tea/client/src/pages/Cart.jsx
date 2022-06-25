import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet";
import Wrapper from "../components/Wrapper";
import {useEffect} from "react";
import {addToCart, decreaseCart, removeFromCart, clearCart, getTotals} from "../features/cartSlice";

const Cart = () => {

    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <Wrapper>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Shopping Cart</title>
                </Helmet>
        <div className="cart-container">
                <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty</p>
                    <div className="start-shopping">
                        <Link to="/products">
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems?.map(cartItem =>(
                            <div className="cart-item" key={cartItem.id}>
                                <div className="cart-product">
                                    <img src={cartItem.imgBig} alt={cartItem.name}/>
                                    <div>
                                        <h5>{cartItem.product_description}</h5>
                                    </div>
                                </div>
                                <div className="cart-product-price">${cartItem.price}</div>
                                <div className="cart-product-quantity">
                                    <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                    <div className="count">{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                </div>
                                <div className="cart-product-total-price">
                                    ${cartItem.price * cartItem.cartQuantity}
                                    <div className="delete">
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>Delete</button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <div className="cart-product-quantity">
                            <button onClick={()=> handleClearCart()}>Clear Cart</button>
                        </div>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className="amount">${cart.cartTotalAmount + 170}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                          <Link to="/order">
                              <button>Check out</button>
                          </Link>
                            <div className="continue-shopping">
                                <Link to="/products">
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            )}
        </div>
            </Wrapper>
        </div>
    );
};

export default Cart;