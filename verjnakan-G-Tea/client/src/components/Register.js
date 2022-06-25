import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/images/reglog.png"
import Wrapper from "./Wrapper";
import {useForm} from "react-hook-form";
import WrapperLogOut from "./WrapperLogOut";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate('/');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const {register,
        formState:{errors},
        handleSubmit,
    } = useForm();

    console.log("errors", errors)
    return (
<WrapperLogOut>
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                   <div className="columns is-centered">
                        <div className="column is-4-desktop createAcc">
                            <img src={logo} alt=""/>
                            <h1 className="signup">Signup to create an account</h1>
                            <h5 className="haveAccount">Already have an account? <Link to='/login' className={'tologin'}>Login</Link></h5>
                                    <form onSubmit={Register}
                                          className="SignupBox">

                                    <p className="has-text-centered">{msg}</p>
                                <div className="">
                                        <div className="controls">
                                        <input
                                               type="text"
                                               className="input"
                                               placeholder="Username"
                                               value={name}
                                               onChange={(e) => setName(e.target.value)} />
                                        </div>
                                </div>
                                <div className="">
                                    <div className="controls">
                                        <input
                                                type="text"
                                                className="input"
                                                placeholder="Email address"
                                                value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="controls">
                                        <input
                                               type="password"
                                               className="input"
                                               placeholder="Password"
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="Confirm Password"
                                            value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="">
                                   <button type="submit" className="button is-success is-fullwidth">Signup</button>
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

export default Register