import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import "../../public/css/Header.css";
import Articles from "./Articles";

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/:subject" component={Articles} />
        <Route exact path="/" component={Articles} />
      </Switch>
    </div>
  </Router>
);

export default App;
