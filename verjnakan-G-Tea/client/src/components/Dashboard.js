import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Wrapper from "./Wrapper";
import {setLogin} from "../features/cartSlice";
import {useDispatch} from "react-redux";


const Dashboard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/login");
            }
        }
    }

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            dispatch(setLogin(false))
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }
    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    return (
        <div>
            <Wrapper>
            <div className="container mt-5">
                <h1>Welcome your profile: {name}</h1>
            <table>
                <tbody className={'profile-body'}>
                    <tr className={'profile-user'}>
                      <span>Username:  <input value={name} disabled/></span>
                      <span>Email address:   <input value={email} disabled/></span>
                      <button onClick={Logout} type="submit" className="save-button">Logout</button>
                    </tr>
                </tbody>
            </table>
        </div>
            </Wrapper>
        </div>
    )
}

export default Dashboard