import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "Fix you", duration: '4:05' },
        { title: "The scientist", duration: '4:05' },
        { title: "Paradise", duration: '4:05' },
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});