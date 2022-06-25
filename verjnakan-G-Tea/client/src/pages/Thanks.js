import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearCart} from "../features/cartSlice";
import Home from "./Home"

function Thanks(props) {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Thanks</title>
                </Helmet>
                <div className="jumbotron">
                    <h2 className="text-center">YOUR ORDER HAS BEEN RECEIVED</h2>
                    <h3 className="text-center">Thank you for your payment, it’s processing</h3>

                    <p className="text-center">You will receive an order confirmation email with details of your order and a link to track your process.</p>
                    <center>
                        <div className="btn-group">
                            <Link to={'/'} onClick={()=> handleClearCart()} className="btn btn-lg btn-warning">CONTINUE</Link>
                        </div>
                    </center>
                </div>
            </div>
    );
}

export default Thanks;