import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";
import streams from "../apis/streams";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async function (dispatch) {
    const resp = await streams.post("streams", formValues);
    dispatch({ type: CREATE_STREAM, payload: resp.data });
  };
};
