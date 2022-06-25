import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Laptops from "./pages/Laptops";
import SingleProduct from "./pages/SingleProduct";
import Payment from './pages/Payment'
import Thanks from "./pages/Thanks";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App(props) {

    return (
        <div>
            <BrowserRouter>
                <ToastContainer/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />}/>
                <Route path='/profile' element={<Dashboard />}/>
                <Route path='/about' element={<About />} />
                <Route path='/products/:productId' element={<SingleProduct />} />
                <Route path='/products' element={<Laptops />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/shoppingCart' element={<Cart />} />
                <Route path='/order' element={<Order />} />
                <Route path='/payment' element={<Payment />}/>
                <Route path='/thanks' element={<Thanks />}/>
                <Route path='/*' element={<NotFound />}/>

            </Routes>
        </BrowserRouter>
        </div>
    );
}
export default App;
