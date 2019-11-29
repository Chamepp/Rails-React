import React from "react";
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import AOS from 'aos';
import "aos/dist/aos.css";

class Profile extends React.Component {

    componentDidMount() {
        AOS.init({});
    }

    render() {

        return (
            <>
            <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Attari24</title>
  {/* Main Sources */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
  <link rel="icon" href="TabIcon.png" type="image/gif" sizes="32x32" />
  <link rel="stylesheet" href="profile.css" />
  {/* Font Sources */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  <div className="container">
    <div className="card mt-5 border-5 pt-2 active pb-0 px-3">
      <div className="card-body">
        <div className="row">
          <div className="col-12 ">
            <h4 className="card-title "><b>Welcome Back Ashkan Ebtekari !</b></h4>
          </div>
          <div className="nav-container col row">
            <h6 className="card-subtitle mb-2 text-muted">
              <p className="card-text text-muted small "> <img src="https://img.icons8.com/metro/26/000000/star.png" className="mr-1 " id="star" width={19} height={19} /> <span className="vl mr-2 ml-0" /> Here You Are Able <span className="font-weight-bold"> To Preview Your Account.</span></p>
            </h6>
            <div className="profile-nav col-md-3 shadow">
              <div className="panel float-left">
                <div className="user-heading round">
                  <a className="avatar-grid" href="#">
                    <img src="/Files/Welcome-Illustration.png" alt="" />
                  </a>
                  <h1>Ashkan Ebtekari</h1>
                  <p>ashkanebtekari@gmail.com</p>
                  <div className="side-nav">
                    <a href="#">Orders</a> <br />
                    <a href="#">Addresses</a> <br />
                    <a href="#">Promocodes</a> <br />
                    <a href="#">Reviews</a> <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-nav shadow float-right">
              <h1>My Orders</h1>
              <hr />
              <br />
              <div className="order">
                32 Items
                $ 1,400,000
              </div> <br />
              <div className="order">
                2 Items
                $ 400
              </div> <br />
              <div className="order">
                11 Items
                $ 3,200
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-white px-0 ">
        <div className="row">
          <div className=" col-md-auto ">
            <a href="#" className="btn btn-outlined btn-black text-muted bg-transparent" data-wow-delay="0.7s"><img src="https://img.icons8.com/ios/50/000000/settings.png" width={19} height={19} /> <small>SETTINGS</small></a> <i className="mdi mdi-settings-outline" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </>
        );
    }
}


export default Profile;