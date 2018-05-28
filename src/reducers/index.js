import { combineReducers } from "redux";
import articles from "./articles";
import subjects from "./subjects";

const rootReducer = combineReducers({
  articles,
  subjects
});

export default rootReducer;
