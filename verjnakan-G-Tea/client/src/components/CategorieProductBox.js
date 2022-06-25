import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductBox(props) {
    const [products, setproducts, id] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/products/')
            .then((response) => {
                setproducts(response.data);
            });
    }, []);
    const renderList = products.map((product) => {
        return (
            <div className="col-md-4 margin_bottom1 productsBox" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="product_box">
                        <figure><img src={props.data.img} alt="#"/></figure>
                        {products.map((stock) => {
                            <h3 className={'productName'}>{stock.name}</h3>
                        })}
                        {products.map((stock) => {
                            <h4 className={'price'}>{stock.price}</h4>
                        })}
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
}

export default ProductBox;