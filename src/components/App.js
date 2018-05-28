import React from "react";
import Header from "./header/Header";
import Articles from "./main/Articles";
import LinkItem from "./LinkItem";

const App = ({ match }) => (
  <div>
    <Header />
    <Articles />
    <LinkItem match={match} />
  </div>
);

export default App;
