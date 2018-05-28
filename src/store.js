import { createStore, compose } from "redux";
import rootReducer from "./reducers/";
import articles from "./reducers/articles";
import subjects from "./reducers/subjects";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, { subjects: articles() }, enhancers);

export default store;
