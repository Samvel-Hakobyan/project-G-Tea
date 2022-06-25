import React from 'react';
import Flogo from '../assets/images/logo1.png'

function Footer(props) {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <img className="logo1" src={Flogo} alt="#"/>
                                <ul className="social_icon">
                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <h3>About Us</h3>
                                <ul className="about_us">>
                                    <li>dolor sit amet, consectetur <br />magna aliqua. Ut enim ad <br />minim
                                        veniam,<br /> quisdotempor incididunt r</li>
                                </ul>

                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <h3>Contact Us</h3>
                                <ul className="conta"><br />
                                    <li>dolor sit amet,<br /> consectetur magna aliqua. <br />quisdotempor
                                        incididunt<br />
                                        ut e</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html
                                        Templates</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;