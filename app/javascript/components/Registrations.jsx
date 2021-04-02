import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Render } from "react-router-dom";
import '../style/signup.css';
import axios from "axios";
import SignUp from '../files/SignUp.png';
import FlashMessage from 'react-flash-message';




class Registrations extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
            password_confirmation: "",
            loggedInStatus: "NOT_LOGGED_IN",
            showMessage: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    checkLoginStatus() {

      axios.get("/api/v1/sessions/logged_in", { withCredentials: true })
      .then(response => {
        console.log("logged_in?", response);
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        }
        else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
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
        
        const { firstname, lastname, phone, email, password, password_confirmation } = this.state;


        const body = {
            firstname,
            lastname,
            phone,
            email,
            password,
            password_confirmation
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
      const SignUpForm = (
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
          {/* Flash Message */}
          { this.state.showMessage &&
                    <FlashMessage duration={2000}>
                      <div className="flash-message-info text-center">
                          <h4>Created Account Successfully.</h4>
                      </div>
                    </FlashMessage>
          }
          {/* Instruction */}
          <div className="instruction text-center">
            <h1>SignUp</h1>
            <p>Here You Can SignUp With Your Email</p>
          </div>
          {/* SignUp Card */}
          <div className="card main-signup-card">
            {/* Image Card */}
            <img className="main-card-img-top" src={SignUp} alt="Card image cap" />
            <div className="card-body">
              {/* Form */}
              <form onSubmit={this.onSubmit}>
              {/* Name Section */}
              <div className="main-name-section">
                {/* FirstName */}
                <label htmlFor="first-name" className="main-name-label">
                  <input type="text" name="firstname" id="first-name" placeholder=" " value={this.state.firstname} onChange={this.onChange} required />
                  <span className="label">FirstName</span>
                  <span className="focus-bg" />
                </label>
                {/* LastName */}
                <label htmlFor="last-name" className="main-name-label">
                  <input type="text" name="lastname" id="last-name" placeholder=" " value={this.state.lastname} onChange={this.onChange} required />
                  <span className="label">LastName</span>
                  <span className="focus-bg" />
                </label>
              </div>
              {/* Phone Section */}
              <div className="main-phone-section">
                <label htmlFor="phone" className="main-phone-label">
                  <input type="text" name="phone" id="phone" placeholder=" " value={this.state.phone} onChange={this.onChange} required />
                  <span className="label">Phone Number</span>
                  <span className="focus-bg" />
                </label>
              </div>
              {/* Email Section */}
              <div className="main-email-section">
                <label htmlFor="email" className="main-email-label">
                  <input type="text" name="email" id="email" placeholder=" " value={this.state.email} onChange={this.onChange} required />
                  <span className="label">Email Address</span>
                  <span className="focus-bg" />
                </label>
              </div>
              {/* Password Section */}
              <div className="main-password-section">
                {/* Password */}
                <label htmlFor="password" className="main-password-label">
                  <input type="password" name="password" id="password" placeholder=" " value={this.state.password} onChange={this.onChange} required />
                  <span className="label">Password</span>
                  <span className="focus-bg" />
                </label>
                {/* Password Confirmation */}
                <label htmlFor="password" className="main-password-label">
                  <input type="password" name="password_confirmation" id="password_confirmation" placeholder=" " value={this.password_confirmation} onChange={this.onChange} required />
                  <span className="label">Password Confirmation</span>
                  <span className="focus-bg" />
                </label>
              </div>
              {/* SignUp Section */}
              <div className="main-signup-section">
                {/* Finalization */}
                <button className="main-signup-button" type="submit">SignUp</button>
              </div>
              </form>
            </div>
            {/* Card Footer */}
            <div className="card-footer text-muted">
              By SignUp You Will Accept <strong>Terms of Services</strong> &amp; <strong>User Conditions</strong>
            </div>
          </div>
        </div>
      );

        return (
          this.state.loggedInStatus === "NOT_LOGGED_IN" ? SignUpForm : <Redirect to="/lost" />
        );
        
    }

}

export default Registrations;