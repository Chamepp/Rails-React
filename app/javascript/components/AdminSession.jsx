import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../style/login.css";
import LogIn from "../files/Login.png";



class AdminSession extends React.Component {
    
    

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            key: "",
            password: "",
            loggedInStatus: "NOT_LOGGED_IN",
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
        
        const { username, key, password } = this.state;


        const body = {
            username,
            key,
            password
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch("/api/v1/admin_session/create", {
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
            .catch(error => console.log(error.message));
            this.setState({ showMessage: true });
            setTimeout(() => {
              this.props.history.push('/administration');
            }, 3000);
            
    }




    render() {

      const AdminForm = (
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
        {/* Instruction */}
        <div className="admin-instruction text-center">
          <h1>Home Sweet Home !</h1>
          <p>Login To View Admin Panel</p>
        </div>
        {/* Login Card */}
        <div className="card login-card">
          {/* Image Card */}
          <img className="card-img-top" src={LogIn} alt="Card image cap" />
          <div className="card-body">
            {/* Form */}
            <form onSubmit={this.onSubmit}>
            {/* Email Section */}
            <div className="admin-email-section">
              <label htmlFor="email" className="email-label">
                <input type="text" name="username" id="email" placeholder=" " value={this.state.username} onChange={this.onChange} required />
                <span className="label">Username</span>
                <span className="focus-bg" />
              </label>
            </div>
            {/* Password Section */}
            <div className="admin-password-section">
              {/* Password */}
              <label htmlFor="password" className="password-label">
                <input type="password" name="password" id="password" placeholder=" " value={this.state.password} onChange={this.onChange} required />
                <span className="label">Password</span>
                <span className="focus-bg" />
              </label>
            </div>
            {/* Login Section */}
            <div className="admin-login-section">
              {/* Finalization */}
              <button className="admin-login-button" type="submit">LogIn</button>
            </div>
            </form>
          </div>
          {/* Card Footer */}
          <div className="card-footer text-muted">
            By Login You Will Accept <strong>Terms of Services</strong> &amp; <strong>User Conditions</strong>
          </div>
        </div>
      </div>
      );

        return (
          this.state.loggedInStatus === "NOT_LOGGED_IN" ? AdminForm : <Redirect to="/lost" />
        );
    }
}

export default AdminSession;