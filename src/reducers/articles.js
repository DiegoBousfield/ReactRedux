import _ from "lodash";
import { FETCH_ARTICLES } from "../actions/actionCreator";

export default function articles(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload.data;
    default:
      return state;
  }
}
