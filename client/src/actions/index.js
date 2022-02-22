import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";
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

export const fetchStreams = () => {
  return async function (dispatch) {
    const resp = await streams.get("streams");
    dispatch({ type: FETCH_STREAMS, payload: resp.data });
  };
};

export const fetchStream = (id) => {
  return async function (dispatch) {
    const resp = await streams.get(`streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: resp.data });
  };
};

export const createStream = (streamObj) => {
  return async function (dispatch, getState) {
    const { userId } = getState().auth;
    const resp = await streams.post("streams", {
      ...streamObj,
      userId: userId,
    });
    dispatch({ type: CREATE_STREAM, payload: resp.data });
  };
};

export const editStream = (id, streamObj) => {
  return async function (dispatch) {
    const resp = await streams.put(`streams/${id}`, streamObj);
    dispatch({ type: EDIT_STREAM, payload: resp.data });
  };
};

export const deleteStream = (id) => {
  return async function (dispatch) {
    await streams.delete(`streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
  };
};
