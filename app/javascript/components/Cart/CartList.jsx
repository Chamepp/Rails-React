import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import HerbalWind from "../../files/Herbal-Wind.png";
import "../../style/cart.css";
import AOS from "aos";
import "aos/dist/aos.css";





    const CartList = ({ cart }) => {
        const [totalPrice, setTotalPrice] = useState(0);
        const [totalItems, setTotalItems] = useState(0);
        
        useEffect(() => {
            AOS.init({});

            let items = 0;
            let price = 0;

            cart.forEach(item => {
                items += item.quantity;
                price += item.quantity * item.price;
            })
            setTotalPrice(price);
            setTotalItems(items);
        }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]
        )

        const allItems = (
            cart.map((item) => (
              <CartItem key={item.id} itemData={item}/>
            ))
        )

        const noItems = (
          <div className="empty-cart">
            <h1 className="text-center">Empty Cart !</h1>
            <img src={HerbalWind} />
          </div>
        )
        
        return (
            <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>
  <title>Attari24</title>
  <div className="cart-body" data-aos="fade-down" data-aos-duration="700">
  <div className="card cart-card">
    <div className="row">
      <div className="col-md-8 cart">
        <div className="cart-title">
          <div className="row">
            <div className="col">
              <h4><b>Shopping Cart</b></h4>
            </div>
            <div className="col align-self-center text-right text-muted">{totalItems} Items</div>
          </div>
        </div>
        <div className="amount-controller" data-spy="scroll" data-target="navbar" data-offset="50">
        <>
            {cart.length > 0 ? allItems : noItems}
        </>
        </div>
        <div className="back-to-shop"><Link to="/products">← Back to shop</Link></div>
      </div>
      <div className="col-md-4 summary">
        <div>
          <h5><b>Summary</b></h5>
        </div>
        <hr />
        <div className="row">
          <div className="col">{totalItems} Items</div>
          <div className="col text-right">$ {totalPrice}</div>
        </div> <br /> <br />
        <form>
          <p>Shipping</p>
          <div className="shipping rounded">
            <h6>Standard-Delivery- $30.00</h6>
          </div>
          <p>Enter Redeem</p> <input id="code" className="rounded" placeholder="Enter your code" />
        </form>
        <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
          <div className="col">Total Price</div>
          <div className="col text-right">$ {totalPrice + 30}</div>
        </div> <button className="btn">CheckOut</button>
      </div>
    </div>
  </div>
  </div>
</div>
        );
    };



const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};






export default connect(mapStateToProps)(CartList);

