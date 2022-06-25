import React from 'react';
import Wrapper from "../components/Wrapper";
import about from '../assets/images/about.jpg'
import {Helmet} from "react-helmet";

function About() {
    return (
            <Wrapper>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About</title>
                </Helmet>
                <div className="about">
                    <div className="container">
                        <div className="row d_flex">
                            <div className="col-md-5">
                                <div className="titlepage">
                                    <h2>About Us</h2>
                                    <p>The firm begins its activity in 1988 under the name . It is specialized on delivery of computer and office equipment and provides the all necessary services. Since 1994 the firm existed under the name.
                                        В Beginning from 1995В has been the exclusive distributor of the Xerox Corporation in Armenia. Besides that the firm is the official partner of APC, HP, Seagate and Intel companies. In 1997, 1999 and 2000 the firm became the best dealer of Xerox in Asia region. In 2000 it was awarded with the Golden Arch of Europe.</p>
                                     <a className="read_more" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="about_img">
                                    <figure><img src={about} alt="#"/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
    );
}

export default About;