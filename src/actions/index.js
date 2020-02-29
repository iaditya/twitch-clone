import jsonplaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// LODASH MEMOIZE EXAMPLE
// const _fetchUser = _.memoize(async function(userId, dispatch) {
//   console.log(userId);
//   const response = await jsonplaceholder.get(`/users/${userId}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
