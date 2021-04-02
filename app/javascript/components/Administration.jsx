import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../style/administration.css";
import SideNav from  "../components/SideNav";
import Logo from "../files/Logo.png";
import { Line } from 'react-chartjs-2';





class Administration extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
          charData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Purchases",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                        'rgba(0, 130, 217, 0.7)',
                    ],
                    borderColor: [
                        'rgb(43, 115, 143)',
                    ],
                    borderWidth: 2
                },
                    {
                        label: "Sales",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        backgroundColor: [
                            'rgba(0, 130, 217, 0.932)',
                        ],
                        borderColor: [
                            'rgb(38, 97, 124)',
                        ],
                        borderWidth: 2
                    }
                ]
    
          },
          showMessage: false
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

    checkLoginStatus() {

      axios.get("/api/v1/admin_session/logged_in", { withCredentials: true })
      .then(response => {
        console.log("logged_in?", response);
        if (response.data.admin_logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        }
        else if (!response.data.admin_logged_in && this.state.loggedInStatus === "LOGGED_IN") {
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


    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

  onSubmit(event) {
      event.preventDefault();
      this.setState({ showMessage: false });
      
      const { number, title, price, category, description } = this.state;


      const body = {
          number,
          title,
          price,
          category,
          description
      };

      const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch("/api/v1/registrations/create", {
          method: "POST",
          headers: {
              "X-CSRF-Token": token,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Network response was not ok.");
          })
          .then(response => this.props.history.push(`/registrations/${response.id}`))
          .catch(error => console.log(error.message));
          this.setState({ showMessage: true });
          setTimeout(() => {
            this.props.history.push('/');
          }, 3000);
  }


    render() {

      const AdministrationPreview = (
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
                <h1 className="h2">Dashboard</h1>
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
                <Line width={100} height={100} data={this.state.charData} options={{ maintainAspectRatio: false }} />
              </div>
              <h2 className="dashboard-title">Recent Sales</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Checkout</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4344</td>
                      <td>Ken</td>
                      <td>Makinz</td>
                      <td>824813449</td>
                      <td>Brooklyn St 234</td>
                      <td>
                        <a className="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                          </svg>
                          Checkout
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4345</td>
                      <td>Ray</td>
                      <td>Johnson</td>
                      <td>545646</td>
                      <td>Ferado St 234</td>
                      <td>
                        <a className="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                          </svg>
                          Checkout
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4346</td>
                      <td>Kelly</td>
                      <td>Martinez</td>
                      <td>45436</td>
                      <td>SanRan St 234</td>
                      <td>
                        <a className="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                          </svg>
                          Checkout
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4347</td>
                      <td>Fernando</td>
                      <td>Diagorez</td>
                      <td>9034535</td>
                      <td>Nothinghum St 234</td>
                      <td>
                        <a className="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                          </svg>
                          Checkout
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4348</td>
                      <td>Paulo</td>
                      <td>Vachestra</td>
                      <td>6523489</td>
                      <td>Ukinia St 234</td>
                      <td>
                        <a className="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                          </svg>
                          Checkout
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4344</td>
                      <td>Ken</td>
                      <td>Makinz</td>
                      <td>824813449</td>
                      <td>Brooklyn St 234</td>
                      <td>
                        <a className="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                          </svg>
                          Checkout
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
      
      
      );

        return (
          AdministrationPreview
        );  
    }
}


export default Administration;