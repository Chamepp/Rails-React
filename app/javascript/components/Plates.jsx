import React from "react";
import { Link } from "react-router-dom";
import PlateProduct from "../Redux/Shop/Categories/PlateProduct";
import axios from "axios";
import AOS from "aos";
import "../style/plate.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Logo from "../files/Logo.png";
import ItemFour from "../files/Item-Four.png";
import ItemFive from "../files/Item-Five.png";
import ItemSix from "../files/Item-Six.png";

class Plates extends React.Component {

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
        <div className="info text-center">
          {/* Search Info */}
          <br /> <br /> <br />
          <br /> <br /> <br />
          <h1 className="hello text-center animated animatedFadeInUp fadeInUp">
            Plates
          </h1>
          {/* SearchBar */}
          <input
            className="herbal-searchbar form-control animated animatedFadeInUp fadeInUp"
            type="text"
            placeholder="Search Plates"
          />
        </div>
        <PlateProduct />
        <Footer />
      </div>
    );
  }
}

export default Plates;
