import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function WrapperLogOut(props) {
    const isLogin = useSelector(store => store.cart.isLogin);
    if(isLogin){
        return  <Navigate to="/" replace/>;
    }
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default WrapperLogOut;