import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";



const NavBarCounter = ({ cart }) => {


    const [cartCounter, setCartCounter] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.quantity;
        });
        setCartCounter(count);
    }, [cart, cartCounter]);


    return (
        <span className="badge badge-pill badge-primary">{cartCounter}</span>
    );
};



const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    };
};


export default connect(mapStateToProps)(NavBarCounter);