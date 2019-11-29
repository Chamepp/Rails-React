import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../../style/cart.css";
import {
  adjustItemQuantity,
  removeFromCart,
} from "../../Redux/Shop/action";
import AOS from "aos";
import "aos/dist/aos.css";




const CartItem = ({ itemData, adjustItemQuantity, removeFromCart }) => {


  const [count, setCount] = useState(itemData.quantity);

  const onChangeHandler = (e) => {
    setCount(e.target.value);
    adjustItemQuantity(itemData.id, e.target.value);
  };


  useEffect(() => {
    AOS.init({});
  });


  return (
    <div className="row">
        <div className="row main align-items-center">
        <div className="col-2"><img className="img-fluid" src={itemData.image_url} /></div>
        <div className="col">
  <div className="row text-muted">{itemData.category}</div>
            <div className="row">{itemData.title}</div>
        </div>
        <div className="col"> <span href="#">-</span>
        <span className="badge badge-primary">
          <input
            min="1"
            type="number"
            id="quantity"
            name="quantity"
            value={count}
            onChange={onChangeHandler}
          />
          </span>
          <span href="#">+</span>
          </div>
        <div className="col">$ {itemData.price}<span onClick={() => removeFromCart(itemData.id)} className="close">✕</span></div>
        </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    adjustItemQuantity: (id,value) => dispatch(adjustItemQuantity(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};


export default connect(null, mapDispatchToProps)(CartItem);
