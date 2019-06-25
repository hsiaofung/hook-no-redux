import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./Store";
import HomePage from "./HomePage";
import FavPage from "./FavPage";
import { Router } from "@reach/router";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <FavPage path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
