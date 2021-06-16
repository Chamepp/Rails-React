import React from "react";
import { Link } from "react-router-dom";
import "../../style/administration.css";
import { Bubble } from 'react-chartjs-2';
import SideNav from "../SideNav";
import Logo from "../../files/Logo.png";
import axios from "axios";




class Products extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          products: [],
          number: "",
          title: "",
          price: "",
          category: "",
          description: "",
          image: "",
          charData: {
              datasets: [{
                  label: 'HarryPotter',
                  data: [{
                      x: 3,
                      y: 7,
                      r: 15
                  }],
                  backgroundColor: "#ff6384",
                  hoverBackgroundColor: "#ff6384"
              },
    
    
                  {
                  label: 'WonderLand',
                  data: [{
                      x: 5,
                      y: 7,
                      r: 15
                  }],
                  backgroundColor: "#44e4ee",
                  hoverBackgroundColor: "#44e4ee"
              },
    
                  {
                      label: 'Rabbiti',
                      data: [{
                          x: 2,
                          y: 8,
                          r: 15
                      }],
                      backgroundColor: "#f247ff",
                      hoverBackgroundColor: "#f247ff"
                  },
    
    
                  {
                      label: 'Mr.Morlando',
                      data: [{
                          x: 2,
                          y: 8,
                          r: 15
                      }],
                      backgroundColor: "#00909b",
                      hoverBackgroundColor: "#00909b"
                  },
    
    
                  {
                      label: 'Nitis Town',
                      data: [{
                          x: 3,
                          y: 1,
                          r: 15
                      }],
                      backgroundColor: "#f6ff00",
                      hoverBackgroundColor: "#f6ff00"
                  },
    
    
    
                  {
                  label: 'Juliet and Romeo',
                  data: [{
                      x: 7,
                      y: 7,
                      r: 15
                  }],
                  backgroundColor: "#62088A",
                  hoverBackgroundColor: "#62088A"
              }]
          }
        };
  
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }



    onSubmit(event) {
        event.preventDefault();
        this.setState({ showMessage: false });
        
        const { number, title, price, category, description, image } = this.state;
        let data = new FormData();

        const body = {
            number,
            title,
            price,
            category,
            description,
            image
        };

        var imageData = document.querySelector('input[type="file"]').files[0];

        data.append('product[number]',  number);
        data.append('product[title]', title);
        data.append('product[price]', price);
        data.append('product[category]', category);
        data.append('product[description]', description);
        data.append('product[image]', imageData);
  
        const token = document.querySelector('meta[name="csrf-token"]').content;
        axios({
          method: "POST",
          url: "/api/v1/products/create",
          data: data,
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error("Network response was not ok.");
          })
          .then(response => this.props.history.push(`/products/${response.id}`))
          .catch(error => console.log(error.message));
          this.setState({ showMessage: true });
          setTimeout(() => {
            this.props.history.push('/');
        }, 3000);
    }


    componentDidMount() {
      axios
      .get("/api/v1/products/index", { withCredentials: true })
      .then((response) => {
        this.setState({ products: response.data.allProducts });
      })
      .catch((error) => {
        console.log("Check Login Error", error);
      });
    }

    render() {
      const { products } = this.state;
      const allProducts = products.map((products) => (
          <tr>
            <td>{products.id}</td>
            <td>{products.title}</td>
            <td>{products.price}</td>
            <td>{products.category}</td>
          </tr>
      ))
        return (
            <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content />
  <meta name="generator" content="Hugo 0.79.0" />                                                         
  <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/" />
  { /* Scripts Sources */}
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
  <script src="/docs/4.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
  {/* Favicons */}
  <link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json" />
  <meta name="theme-color" content="#7952b3" />
  <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    " }} />
  {/* Custom styles for this template */}
  <header className="navbar navbar-dark sticky-top bg-white flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
      <img src={Logo} />
    </a>
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <input className="admin-searchbar form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
    <ul className="navbar-nav btn btn-primary">
      <li className="nav-item">
        <a className="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </header>
  <div className="container-fluid">
    <div className="row">
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <SideNav />
      </nav>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Products</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar" />
              This week
            </button>
          </div>
        </div>
        <div className="chart-holder">
          <Bubble width={100} height={100} data={this.state.charData} options={{ maintainAspectRatio: false }} />
        </div>
        <h2 className="dashboard-title">Items</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>
              {allProducts}
            </tbody>
          </table>
        </div>
        <form onSubmit={this.onSubmit}>
        {/* Create Products */}
        <div className="create-products">
        <h2 className="dashboard-title">Create Products</h2> <br />
        <div className="product-first-section">
          {/* Number */}
          <label htmlFor="number">Code</label>
          <input type="number" className="form-control" name="number" id="number" placeholder=" " value={this.state.number} onChange={this.onChange} required />
          {/* Title */}
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" name="title" id="title" placeholder=" " value={this.state.title} onChange={this.onChange} required />
        </div> <br />
        <div className="product-second-section">
          {/* Category */}
          <label htmlFor="category">Category</label>
          <input type="text" className="form-control" name="category" id="category" placeholder=" " value={this.state.category} onChange={this.onChange} required /> <br />
          {/* Price */}
          <label htmlFor="price">Price</label>
          <input type="number" className="form-control" name="price" id="price" placeholder=" " value={this.state.price} onChange={this.onChange} required />
        </div> <br />
        <div className="product-third-section">
          {/* Description */}
          <label htmlFor="description">Description</label>
          <textarea type="text" className="form-control" name="description" id="description" placeholder=" " value={this.state.description} onChange={this.onChange} required />
        </div> <br />
        <div className="product-fourth-section">
          {/* Image */}
          <label htmlFor="image">Image</label>
          <input type="file" onChange={this.onUpload} />
        </div> <br />
        <div>
          {/* Finalization */}
          <button type="submit" className="btn btn-primary">Create</button>
        </div> <br />
        </div>
      </form>
      </main>
    </div>
  </div>
</div>

        );
    }
}

 
export default Products;