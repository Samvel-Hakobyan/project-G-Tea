import React from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import SingleProductBox from "../components/SingleProductBox";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {Helmet} from "react-helmet";

function SingleProduct(props) {

    return (
        <div>
            <Wrapper>

                <div className="container">
                    <Link to="/products"> <AiOutlineArrowLeft className={'left-icon'}/></Link>
                    <SingleProductBox />

                </div>
            </Wrapper>
        </div>
    );
}

export default SingleProduct;