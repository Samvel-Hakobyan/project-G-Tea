import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import logo from "../assets/images/reglog.png";
import Wrapper from "./Wrapper";
import {setLogin} from "../features/cartSlice";
import {useDispatch} from "react-redux";
import WrapperLogOut from "./WrapperLogOut";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            dispatch(setLogin(true))

            navigate("/", {replace: true});

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <WrapperLogOut>
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop createAcc">
                            <img src={logo} alt=""/>
                            <h1 className="signup">Login to your account</h1>
                            <h5 className="haveAccount">Don't have an account? <Link to='/register' className={'tologin'}>Signup</Link></h5>

                            <form onSubmit={Auth} className="SignupBox">
                                <div className="error-message">
                                <p className="has-text-centered error-text">{msg}</p>
                                </div>
                                <div>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </WrapperLogOut>
    )
}

export default Login