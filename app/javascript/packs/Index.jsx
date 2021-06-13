import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../components/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "../Redux/store";


const AutoRender = () => {


  const [ locationKeys, setLocationKeys ] = useState([])
  const history = useHistory()

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([ _, ...keys ]) => keys)

          // Handle forward event

        } else {
          setLocationKeys((keys) => [ location.key, ...keys ])

          // Handle back event

        }
      }
    })
  }, [ locationKeys, ])
}

const CartItem = () => {
  AutoRender();
}

document.addEventListener("DOMContentLoaded", () => {

  render (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});
export default App;