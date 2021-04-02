import React from "react";
import { Link } from "react-router-dom";
import "../../style/administration.css";
import { HorizontalBar } from 'react-chartjs-2';
import SideNav from "../SideNav";
import Logo from "../../files/Logo.png";




class Customers extends React.Component {
    

  constructor(props) {
    super(props);
    this.state = {
      users: [],
        charData: {
            "labels": ["2020", "2019", "2018", "2017", "2016", "2015", "2014"],
            "datasets": [{
                "label": "Customers",
                "data": [22, 33, 55, 12, 86, 23, 14],
                "fill": false,
                "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
                ],
                "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
                ],
                "borderWidth": 1
            }],
            "options": {
                "scales": {
                    "xAxes": [{
                        "ticks": {
                            "beginAtZero": true
                        }
                    }]
                }
            }    
        }
    }
  }


  componentDidMount() {
    const url = "/api/v1/sessions/index";
    fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Network Response Was Not Ok !!!")
    })
    .then(response => this.setState({ users: response }))
  }


    render() {
      const { users } = this.state;
      const allUsers = users.map((users) => (
        <tr>
          <td>{users.id}</td>
          <td>{users.firstname}</td>
          <td>{users.lastname}</td>
          <td>{users.phone}</td>
          <td>{users.email}</td>
          <td>Brooklyn St 688</td>
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
          <h1 className="h2">Customers</h1>
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
          <HorizontalBar width={100} height={100} data={this.state.charData} options={{ maintainAspectRatio: false }} />
        </div>
        <h2 className="dashboard-title">Network</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {allUsers}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</div>

        );
    }
}
 
export default Customers;