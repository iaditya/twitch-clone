import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = async () => {
  const response = await jsonplaceholder.get("/posts");
  return {
    type: "FETCH_POSTS"
  };
};
