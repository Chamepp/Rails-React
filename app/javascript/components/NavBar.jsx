import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import NavBarCounter from "./NavBarCounter";
import '../style/home.css';
import Logo from '../files/Logo.png';
import HerbalBag from "../files/Herbal-Bag.png";
import HerbalHeart from "../files/Herbal-Heart.png";
import HerbalUser from "../files/Herbal-User.png";







class NavBar extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN"
        };
    }

    
    checkLoginStatus() {

      axios.get("/api/v1/sessions/logged_in", { withCredentials: true })
      .then(response => {
        console.log("logged_in?", response);
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        }
        else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          })
        }
      })
      .catch(error => {
        console.log("Check Login Error", error);
      });
    
    }

    

    componentDidMount() {
      this.checkLoginStatus();
    }


    render() {


        const UserButtons = (
            <>
              <Link className="cart-button" to="/">
                <img src={HerbalHeart} />
              </Link>
              <Link className="cart-button" to="/cart">
                <img src={HerbalBag} />
                <NavBarCounter />
              </Link>
              <Link className="cart-button" to="/">
                <img src={HerbalUser} />
              </Link>
            </>
          );
          

          const SessionButtons = (
            <>
              <Link to="/registrations/index" ><button className="nav-signup-button">SignUp</button></Link>
              <Link to="/sessions/index" ><button className="nav-login-button">LogIn</button></Link>
            </>
          );


        return (
        <div className="navbar navbar-dark bg-white shadow fixed-top">
          <div className="container">
            {/* Logo */}
            <Link to="/">
              <img className="logo" src={Logo} />
            </Link>
            {/* Links */}
            <div className="nav-items">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Herbals</NavLink>
              <NavLink to="/packs">Packs</NavLink>
              <NavLink to="/plates">Plates</NavLink>
              <NavLink to="/potions">Potions</NavLink>
            </div>
            {/* User Buttons */}
            <div className="user-buttons">
              { this.state.loggedInStatus === "NOT_LOGGED_IN" ? SessionButtons : UserButtons }
            </div>
          </div>
        </div>
        );
    }
}


const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  };
};

 
export default connect(mapStateToProps)(NavBar);