import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FrequentlyAsked from "../components/FrequentlyAsked";
import '../style/home.css';
import Welcome from '../files/Welcome-Illustration.png';
import Why_One from '../files/Why-Fast.png';
import Why_Two from '../files/Why-Software.png';
import Why_Three from '../files/Why-Ship.png';
import Info from '../files/Info-Illustration.png';
import SlideOne from "../files/SlideOne.png";
import SlideTwo from "../files/SlideTwo.png";
import SlideThree from "../files/SlideThree.png";
import AOS from 'aos';
import "aos/dist/aos.css";







class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN"
        };
    }

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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
    <link rel="icon" href="TabIcon.png" type="image/gif" sizes="32x32" />
    {/* SlideShow Sources */}
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    {/* Font Sources */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap" rel="stylesheet" />
    
    
    <header>
      {/* NavBar */}
      <nav className="navbar">
        <NavBar />
      </nav>
    </header>
    {/* Welcome */}
    <div className="home-welcome">
      {/* Welcome Part One*/}
      <div className="home-welcome-part-one animated animatedFadeInUp fadeInUp">
        <h1>We Are Attari24.</h1>
        <p>
          We Are a Local Private Based Company Located In Iran Which We Are Really Into Herbal Stuffs and <br />
          Looking For Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br />
          unknown printer took a galley Services and Latest Trends Which Are The Coolest in Around We Always <br />
          Believe in High Quality Services Which from a Lorem Ipsum passage , and going through the cites <br />
          of the word in classical literature, discovered the undoubtable source. <br />
        </p>
        <button>
          Lets Go
          <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
        </button>
      </div>
      {/* Welcome Part Two */}
      <div className="home-welcome-part-two animated animatedFadeInUp fadeInUp">
        <img src={Welcome} />
      </div>
    </div>
    {/*  Why Us Part */}
    <div className="home-why-us text-center" data-aos="zoom-in">
      {/* Why One */}
      <div className="home-why-one">
        <img src={Why_One} />
        <h1>Fast</h1>
        <p>
          Some quick example text to build on the card title <br />
          and make up the bulk of the <br />
          card's content.
        </p>
      </div>
      {/* Why Two */}
      <div className="home-why-two">
        <img src={Why_Two} />
        <h1>Software</h1>
        <p>
          Some quick example text to build on the card title <br />
          and make up the bulk of the <br />
          card's content.
        </p>
      </div>
      {/* Why Three */}
      <div className="home-why-three">
        <img src={Why_Three} />
        <h1>Shipping</h1>
        <p>
          Some quick example text to build on the card title <br />
          and make up the bulk of the <br />
          card's content.
        </p>
      </div>
    </div>
    <hr className="main-hr" />
    {/* Info */}
    <div className="home-info text-center" data-aos="zoom-out-down">
      {/* Illustration */}
      <img src={Info} data-aos="zoom-out-down" /> <br />
      {/* Search Info */}
      <h1 className="text-center" data-aos="zoom-in">Over + 32,000 Items !</h1>
      {/* SearchBar */}
      <input className="home-searchbar form-control" data-aos="zoom-in" type="text" placeholder="Search Over 32,000 ..." />

    </div>
    {/* Frequently Asked */}
    <br /> <br /> <br />
    <br /> <br /> <br />
    <FrequentlyAsked />
    <Footer />
  </div>
        
        

        );
    }

}


export default Home;