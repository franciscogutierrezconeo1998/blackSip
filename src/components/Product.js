import React from 'react';
import accounting from 'accounting';
import "../assets/css/Product.css";

const Product = ({key, product}) => {
    return (
        <>
        <div className="div_main">
            <div className="div_image">
                <img className="image_product" src={product.image}></img>
            </div>
            <div className="div_name_product">
                <p className="p_name">{product.name}</p>
            </div>
            <div className="div_price">
                <p className="p_price font_bold">{accounting.formatMoney(product.price)}</p>
            </div>
        </div>
        </>
    );
}

export default Product;
