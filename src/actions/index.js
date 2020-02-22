import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
