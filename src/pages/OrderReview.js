import React, { useState, useEffect } from 'react';
import { __GetProducts } from '../services/OrderService';
import Product from '../components/Product';
import NavBarOrder from "../components/NavBarOrder";
import "../assets/css/Product.css";
import "../assets/css/OrderReview.css";
import accounting from 'accounting';

const OrderReview = ({product, totalPrice}) => {

    return (
        <>
        <NavBarOrder/>
            {product.map((objProduct, index) => {
                return <Product key={index} product={objProduct} />
            })}
            <div className="div_order_editar">
                <button className="button_edit">Editar</button>
            </div>
            <div className="div_subtotal">
                <h4 className="h4_subtotal">SUBTOTAL ENVIO</h4>
                <h4 className="h4_subtotal_price">{accounting.formatMoney(totalPrice)} A calcular</h4>
            </div>
            <div className="div_total">
                <h4 className="h4_total">TOTAL</h4>
                <h4 className="h4_total_price">{accounting.formatMoney(totalPrice)}</h4>
            </div>
        </>
    )

}

export default OrderReview;