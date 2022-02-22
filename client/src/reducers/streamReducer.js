import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

import { mapKeys, omit } from "lodash";

export default function streamReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_STREAMS:
      //   let obj;
      //   action.payload.forEach((item) => (obj[item.id] = item));
      //   return obj;
      return { ...state, ...mapKeys(action.payload, "id") };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return omit(state, action.payload);

    default:
      return state;
  }
}
