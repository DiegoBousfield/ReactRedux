import _ from "lodash";
import { SELECT_ARTICLE, FETCH_ARTICLES } from "../actions/actionCreator";

export default function articles(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload.data;
    case SELECT_ARTICLE:
      return action.payload;
    default:
      return state;
  }
}
