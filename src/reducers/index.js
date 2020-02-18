import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "paradise", duration: "3:02" },
    { title: "Hello", duration: "4:12" },
    { title: "Fix You", duration: "5:25" }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});