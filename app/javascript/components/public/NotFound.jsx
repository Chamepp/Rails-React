import React from "react";
import { Link } from "react-router-dom";
import "../../style/NotFound.css";
import NotFoundImage from "../../files/404.png";




class NotFound extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="notfound-container">
                <h1 className="text-center">404<br />Not Found</h1> <br />
                <img className="NotFoundImage img-fluid" src={NotFoundImage} /> <br />
                <div className="back-btn">
                    <Link className="btn btn-primary" to="/">Back To Home</Link> <br />
                </div>
            </div>
        );
    }
}


export default NotFound;