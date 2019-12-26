export const songsReducer = () => {
    return [
        { title: "Paradise", duration: '04:05' },
        { title: "All Start", duration: '03:15' },
        { title: "Fix you", duration: '04:55' },
        { title: "Hello", duration: '04:35' },
    ];
}

export const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectSong;
}