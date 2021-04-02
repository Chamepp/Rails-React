import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import '../style/home.css';
import Logo from '../files/Logo.png';


class SideNav extends React.Component {


    render() {

        return (
            <div className="side-navbar position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <span data-feather="home" />
                  <Link to="/administration">Dashboard</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="file" />
                  <Link to="/administration/orders">Orders</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="shopping-cart" />
                  <Link to="/administration/products">Products</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="users" />
                  <Link to="/administration/customers">Customers</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="bar-chart-2" />
                  <Link to="/administration/reports">Reports</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="layers" />
                  <Link to="/administration/integrations">Integrations</Link>
                </a>
              </li>
            </ul>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="file-text" />
                  Current month
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="file-text" />
                  Last quarter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="file-text" />
                  Social engagement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <span data-feather="file-text" />
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        );

    }
}
 
export default SideNav;