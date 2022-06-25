import React from 'react';
import Wrapper from "../components/Wrapper";
import ThreeBox from "../components/ThreeBox";
import pct from '../assets/images/pct.png'
import { Helmet } from "react-helmet";
// import favicon from '../assets/images/laptop.jpg'
import ContactJs from "../components/ContactJs";
function Home(props) {
    return (
        <div>
        <Wrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <section className="banner_main">
                <div className="col-md-6">
                    <div className="text-bg">
                        <span>Computer And Laptop</span>
                        <h1>Accessories</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered
                            alteration in some form, by injected humour, or </p>
                        <a href="./Contact">Contact Us</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text_img">
                        <figure><img src={pct} alt="#"/></figure>
                    </div>
                </div>
            </section>
            <ThreeBox />
            <div className="contact">
                <div className="container">
                    <div className="row">
                    </div>
                    <ContactJs />
                    </div>
            </div>
        </Wrapper>
        </div>
    );
}

export default Home;