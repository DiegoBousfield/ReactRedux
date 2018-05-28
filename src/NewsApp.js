import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/App";
import favicon from "../public/favicon.ico";

const Root = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:subject?" component={App} />
        <Route path="/?" component={App} />
      </Switch>
    </Router>
  </Provider>
);

render(Root, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
