import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pagination } from 'semantic-ui-react';
import "../../style/frequentlyasked.scss";
import ItemOne from "../../files/Item-One.png";
import AOS from 'aos';
import "aos/dist/aos.css";

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart, fetchProducts } from "./action";






const Product = ({
  mapProducts,
  fetchProducts,
  product,
  url,
  addToCart,
  loadCurrentItem,
}) => {


  const [currentApi, setCurrentApi] = useState("/api/v1/products/index");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const handlePage = (e, { activePage }) => {
    var pageNum = activePage;
    let pageString = pageNum.toString();
    let url = "/api/v1/products/index/?page=" + pageString;
    console.log(url);
    setCurrentApi(url);
  }

  useEffect(() => {
    AOS.init({});
    fetchProducts(currentApi);
    axios
      .get("/api/v1/products/index", { withCredentials: true })
      .then((response) => {
        setCurrentPage(response.data.page);
        setTotalPages(response.data.pages);
      })
      .catch((error) => {
        console.log("Check Login Error", error);
      });
  }, [currentApi, currentPage, totalPages]);

  return (
    <>
    <div className="card-deck d-flex justify-content-center">
      {mapProducts.map((product) => (
        <div className="card item-card"
        key={product.id}
        product={product}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="4000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center"
        >
          {/* Admin Card */}
          {/* Header Image */}
          <img className="card-img-top" src={ItemOne} alt="Card image cap" />
          {/* Card Body */}
          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <h5 className="card-title">$ {product.price}</h5>
            <p className="card-text">{product.description}</p>
            <button
              className="btn btn-primary item-btn-primary"
              onClick={() => addToCart(product.id)}
            >
              + Add To Cart
            </button>
            <a href="#" className="btn btn-danger">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-heart-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </a>
          </div>
          {/* Card Footer */}
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      ))}
    </div>
    <Pagination className="product-pagination" onPageChange={handlePage} defaultActivePage={currentPage} totalPages={totalPages}
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="60"
    data-aos-duration="4000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="center"
    />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mapProducts: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    fetchProducts: (currentApi) => dispatch(fetchProducts(currentApi)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
