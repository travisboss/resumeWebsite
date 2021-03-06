import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import createStore from "./Services/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import publicRoutes from "./routes";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const store = createStore();

if (process.env.NODE_ENV === "development") {
  const a11y = require("react-a11y").default;
  a11y(React, ReactDOM, {
    rules: {
      "img-uses-alt": "off",
      "redundant-alt": ["warn", ["image", "photo", "foto", "bild"]],
    },
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>{publicRoutes}</App>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
