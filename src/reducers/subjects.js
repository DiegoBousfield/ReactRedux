import _ from "lodash";
import { FETCH_SUBJECT } from "../actions/actionCreator";

export default function subjects(state = {}, action) {
  switch (action.type) {
    case FETCH_SUBJECT:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
  return state;
}
