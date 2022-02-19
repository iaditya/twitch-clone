This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Memoization
export const fetchUser = function (id) {
  return async function (dispatch) {
    const res = await axios.get("/user/" + id);
    dispatch({ type: "FETCH_USER", payload: res.data });
  };
};

//NOW LETS APPLY MEMOIZATION

//1ST TRY -> This would not work because we return functin which executes every time for same argumnet.
export const fetchUser = _.memoize(function (id) {
  return async function (dispatch) {
    const res = await axios.get("/user/" + id);
    dispatch({ type: "FETCH_USER", payload: res.data });
  };
});

//2nd TRY -> this also would not work because every time we call the fetchUsr fn we creates new version of meoization fn
export const fetchUser = function (id) {
  return _.memoize(async function (dispatch) {
    const res = await axios.get("/user/" + id);
    dispatch({ type: "FETCH_USER", payload: res.data });
  });
};

// 3rd TRY -> this will wwork

export const fetchUser = (id) => async (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await axios.get("/user/" + id);
  dispatch({ type: "FETCH_USER", payload: res.data });
});

