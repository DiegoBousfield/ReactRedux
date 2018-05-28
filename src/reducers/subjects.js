import { FILTER_SUBJECT } from "../actions/actionCreator";

function subjects(state = [], action) {
  switch (action.type) {
    case FILTER_SUBJECT:
      return action.subject;
    default:
      return state;
  }

  return state;
}

export default subjects;
