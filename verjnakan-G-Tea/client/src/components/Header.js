import React from 'react';
import logo from '../assets/images/logo.png'
import {Link, NavLink, useNavigate} from "react-router-dom";
import { FaShoppingCart} from 'react-icons/fa';
import { CgProfile} from 'react-icons/cg'
import {useSelector} from "react-redux";
import axios from "axios";

function Header(props) {
    const { cartTotalQuantity } = useSelector((state) => state.cart);

    return (
        <div>

            <div className="header">
            <div className="container-fluid">
                <div className="container">

            <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                            <div className="center-desk">
                                <div className="logo">
                                    <Link to="/"><img src={logo} alt="#"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">

                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarsExample04" aria-controls="navbarsExample04"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExample04">
                                <ul className="navbar-nav mr-auto">
                                    <li className={({ isActive }) =>
                                        (isActive ? "nav-item active" : "nav-item")}>
                                        <NavLink className='nav-link'  to="/">Home</NavLink>
                                    </li>
                                    <li className={({ isActive }) =>
                                        (isActive ? "nav-item active" : "nav-item")}>
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className={({ isActive }) =>
                                        (isActive ? "nav-item active" : "nav-item")}>
                                        <NavLink className="nav-link" to="/products">Products</NavLink>
                                    </li>
                                    <li className={({ isActive }) =>
                                        (isActive ? "nav-item active" : "nav-item")}>
                                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                    </li>
                                    {/*<li className={({ isActive }) =>*/}
                                    {/*    (isActive ? "nav-item active" : "nav-item")}>*/}
                                    {/*    <NavLink className="nav-link" to="/register">Signup</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={({ isActive }) =>*/}
                                    {/*    (isActive ? "nav-item active" : "nav-item")}>*/}
                                    {/*    <NavLink className="nav-link" to="/login">Login</NavLink>*/}
                                    {/*</li>*/}
                                    <li className={({ isActive }) =>
                                        (isActive ? "nav-item active" : "nav-item")}>
                                        <NavLink className="nav-link" to="/shoppingCart">
                                            <h3 className={'cart'}>  <span>{cartTotalQuantity}</span> <FaShoppingCart /> </h3>
                                        </NavLink>
                                    </li>

                                    <li className={({ isActive }) =>
                                        (isActive ? "nav-item active" : "nav-item")}>
                                        <NavLink className="nav-link" to="/profile">
                                            <div className="dropdown">
                                                <h3 className={'profile'}> <CgProfile /> </h3>
                                            </div>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </nav>

                    </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Header;