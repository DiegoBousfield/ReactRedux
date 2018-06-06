import { createStore, compose, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import rootReducer from "./reducers/";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(rootReducer, enhancers);

export default store;
