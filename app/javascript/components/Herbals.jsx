import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "../Redux/Shop/Product";
import "../style/herbal.css";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AOS from 'aos';
import "aos/dist/aos.css";
import ItemOne from "../files/Item-One.png";
import ItemTwo from "../files/Item-Two.png";
import ItemThree from "../files/Item-Three.png";





class Herbals extends React.Component {

  componentDidMount() {
    AOS.init({});
  }

  render() {

    return (
      <div>
        {/* Title */}
        <title>Attari24</title>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Main Sources */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        {/* Font Sources */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <header>
          {/* NavBar */}
          <nav className="navbar">
            <NavBar />
          </nav>
        </header>
        {/* Info */}
        <div className="herbal-info text-center">
          {/* Search Info */}
          <br /> <br /> <br />
          <br /> <br /> <br />
          <h1 className="herbal-hello text-center animated animatedFadeInUp fadeInUp">Herbals</h1>
          {/* SearchBar */}
          <input className="herbal-searchbar form-control animated animatedFadeInUp fadeInUp" type="text" placeholder="Search Herbals" />
        </div>
        {/* Admin Deck */}
        <Product />
        <Footer />
      </div>
    );
  }
}

export default Herbals;
