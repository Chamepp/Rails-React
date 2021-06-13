import React from "react";
import { Link } from "react-router-dom";
import '../style/potion.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Logo from '../files/Logo.png';
import ItemSeven from '../files/Item-Seven.png';
import ItemEight from '../files/Item-Eight.png';
import ItemNine from '../files/Item-Nine.png';



class Potions extends React.Component {

    state = {}

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
  {/* Font Sources */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  <header>
    {/* NavBar */}
    <nav className="navbar">
      <NavBar />
    </nav>
  </header>
  {/* Info */}
  <div className="potion-info text-center">
    {/* Search Info */}
    <br /> <br /> <br />
    <br /> <br /> <br />
    <h1 className="potion-hello text-center animated animatedFadeInUp fadeInUp">Potions</h1>
    {/* SearchBar */}
    <input className="potion-searchbar form-control animated animatedFadeInUp fadeInUp" type="text" placeholder="Search Potions" />
  </div>
  {/* Item Cards */}
  {/* Deck One */}
  <div className="card-deck d-flex justify-content-center">
    {/* Card One */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemSeven} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Olive Oil</h4>
        <h5 className="card-title">$ 36</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    {/* Card Two */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemEight} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Honey</h4>
        <h5 className="card-title">$ 86</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    {/* Card Three */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemNine} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Lemon Juice</h4>
        <h5 className="card-title">$ 11</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  {/* Deck Two */}
  <div className="card-deck d-flex justify-content-center">
    {/* Card One */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemSeven} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Olive Oil</h4>
        <h5 className="card-title">$ 36</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    {/* Card Two */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemEight} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Honey</h4>
        <h5 className="card-title">$ 86</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    {/* Card Three */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemNine} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Lemon Juice</h4>
        <h5 className="card-title">$ 11</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  {/* Deck Three */}
  <div className="card-deck d-flex justify-content-center">
    {/* Card One */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemSeven} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Olive Oil</h4>
        <h5 className="card-title">$ 36</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    {/* Card Two */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemEight} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Honey</h4>
        <h5 className="card-title">$ 86</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    {/* Card Three */}
    <div className="card item-card">
      {/* Header Image */}
      <img className="card-img-top" src={ItemNine} alt="Card image cap" />
      {/* Card Body */}
      <div className="card-body">
        <h4 className="card-title">Lemon Juice</h4>
        <h5 className="card-title">$ 11</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" className="btn btn-primary">+ Add To Cart</a>
        <a href="#" className="btn btn-danger">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </a>
      </div>
      {/* Card Footer */}
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  {/* Page Changer */}
  <div className="page-changer">
    <nav>
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
  <Footer />
</div>

        );
    }
}
 
export default Potions;