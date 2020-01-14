export const songsReducer = () => {
    return [
        { title: "Fix you", duration: '4:05' },
        { title: "The scientist", duration: '4:05' },
        { title: "Paradise", duration: '4:05' },
    ];
};


export const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};