import React from "react";
import { Link } from "react-router-dom";
import "../../style/payment.css";


class Payment extends React.Component {
    
    state = {}

    render() { 
        return (
            <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content />
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
  <meta name="generator" content="Hugo 0.79.0" />
  <title>Attari24</title>
  <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
  {/* Bootstrap core CSS */}
  <link href="/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
  {/* Favicons */}
  <link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180" />
  <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
  <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
  <link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json" />
  <link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3" />
  <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico" />
  <meta name="theme-color" content="#7952b3" />
  <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    " }} />
  {/* Custom styles for this template */}
  <link href="form-validation.css" rel="stylesheet" />
  <div className="container">
    <main>
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="/Files/TabIcon.png" />
        <h2>Attari24</h2>
        <p className="lead">Continue the Payment For Shopping.</p>
      </div>
      <div className="row g-3">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge bg-secondary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">−$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <button type="submit" className="btn btn-secondary">Redeem</button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder defaultValue required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Username" required />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
              </div>
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required>
                  <option value>Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required>
                  <option value>Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder required />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address" />
              <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-info" />
              <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>
            <hr className="my-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                <label className="form-check-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder required />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder required />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder required />
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder required />
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </main>
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1">© 2014–2021 Attari24</p>
    </footer>
  </div>
</div>

        );
    }
}

export default Payment;