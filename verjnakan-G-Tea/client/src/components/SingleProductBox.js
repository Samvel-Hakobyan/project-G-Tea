import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";
import {useDispatch} from "react-redux";
import {addToCart} from "../features/cartSlice";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function SingleProductBox(props) {

    const [aboutProduct, setproducts] = useState([]);

    const id = window.location.pathname.replace('/products/', '')

    useEffect(() => {
        axios.post(`http://localhost:5000/products/:id`, {id})
            .then((response) => {
                setproducts(response.data);
            });
    }, []);

    const dispatch = useDispatch()
    const handleAddToCart = (aboutProduct) => {
        dispatch(addToCart(aboutProduct))
        setTimeout('', 3000);
        window.location.reload()

    }
        return (
        <div className="product_box singleProduct">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{aboutProduct.name}</title>
            </Helmet>

            <AliceCarousel autoPlay infinite disableDotsControls autoPlayInterval={2000}>
                   <img src={aboutProduct.imgBig} alt={aboutProduct.name} className="singleImg" />
                   <img src={aboutProduct.img_1} alt={aboutProduct.name} className="singleImg"/>
                   <img src={aboutProduct.img_2} alt={aboutProduct.name} className="singleImg"/>
            </AliceCarousel>

            <div className="productDes">
                 <h4 className={'desc'}>{aboutProduct.product_description}</h4>
                <hr/>
                <h4 className={"price"}><span>Price: </span>{aboutProduct.price} $</h4>
                <div className="productABout">
                    <table className={'a-normal a-spacing-micro'}>
                        <tbody>
                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">Brand</span></td>
                          <td className={'a-span9'}><span className="a-size-base">{aboutProduct.brand}</span></td>

                        </tr>
                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">Model</span></td>
                                 <td className={'a-span9'}><span className="a-size-base">{aboutProduct.model}</span></td>
                        </tr>

                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">CPU Model</span></td>
                                 <td className={'a-span9'}><span className="a-size-base">{aboutProduct.cpu_model}</span>
                                </td>
                        </tr>
                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">Ram Memory Size</span>
                            </td>
                                 <td className={'a-span9'}><span className="a-size-base">{aboutProduct.ram_size}</span>
                                </td>
                        </tr>

                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">Graphic Card</span></td>
                                 <td className={'a-span9'}><span className="a-size-base">{aboutProduct.graphic_card}</span></td>
                        </tr>
                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">Graphic Card Size</span>
                            </td>
                                 <td className={'a-span9'}><span className="a-size-base">{aboutProduct.graphic_card_ram}</span></td>
                        </tr>
                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">Hard Disk</span></td>
                                 <td className={'a-span9'}><span className="a-size-base">{aboutProduct.hard_disk}</span>
                                </td>
                        </tr>
                        <tr className={'a-spacing-small po-brand'}>
                            <td className={'a-span3'}><span className="a-size-base a-text-bold">OC</span></td>
                                 <td className={'a-span9'}><span className="a-size-base">{aboutProduct.oc}</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="productBuy">
                <div className="productBuyABout">
                    <h4 className={'price'}><span>Price: </span>{aboutProduct.price} $</h4>
                    <p>No Import Fees Deposit & $170.35 Shipping to Armenia</p>

                    <button onClick={()=> handleAddToCart(aboutProduct)} type="submit" name="buy"  className={'addCart'}>Add To Cart</button>

                </div>
            </div>

        </div>
    );

}

export default SingleProductBox;