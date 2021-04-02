import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Registrations from "../components/Registrations";
import Cart from "../components/Cart/cart";
import Payment from "../components/Cart/payment";
import Sessions from "../components/Sessions";
import Herbals from "../components/Herbals";
import Potions from "../components/Potions";
import Plates from "../components/Plates";
import Packs from "../components/Packs";
import AdminSession from "../components/AdminSession";
import Administration from "../components/Administration";
import Products from "../components/Administration/Products";
import Customers from "../components/Administration/Customers";
import Orders from "../components/Administration/Orders";
import NotFound from "../components/public/NotFound";




export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/registrations/index" exact component={Registrations} />
      <Route path="/sessions/index" exact component={Sessions} />
      <Route path="/products" exact component={Herbals} />
      <Route path="/potions" exact component={Potions} />
      <Route path="/plates" exact component={Plates} />
      <Route path="/packs" exact component={Packs} />
      <Route path="/admin" exact component={AdminSession} />
      <Route path="/administration" exact component={Administration} />
      <Route path="/administration/products" exact component={Products} />
      <Route path="/administration/customers" exact component={Customers} />
      <Route path="/administration/orders" exact component={Orders} />
      <Route path="/lost" exact component={NotFound} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/payment" exact component={Payment} />
    </Switch>
  </Router>
);