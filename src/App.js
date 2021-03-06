import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.scss";
import "./Fonts/awsomeIcons";

import { AuthProvider } from "./Context/auth";
import AuthRoute from "./util/authRoute";

import Home from "./Pages/home";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Chat from "./Pages/roomChat";
import Profile from "./Pages/Profile";
import Product from "./Pages/product";
import ProductDetail from "./Pages/productDetail";
import Group from "./Pages/group";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Home} />

        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/chat/:id" component={Chat} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/product/:categories/:address/:type" component={Product} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/group" component={Group} />

      </Router>
    </AuthProvider>
  );
}

export default App;
