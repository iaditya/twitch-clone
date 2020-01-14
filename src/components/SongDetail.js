import React from 'react';
import { connect } from 'react-redux';

const matchStateToProps = (state) => {
    //this will pass as props in will call function
    return {
        song: state.selectedSong
    };
}

export default connect(matchStateToProps)(

    function SongDetail(props) {
        console.log(props);

        return (

            props.song
                ?
                <div>
                    <h4>Song Info</h4>
                    <p> Title: {props.song.title}</p>
                    <p> Duration: {props.song.duration}</p>
                </div>
                :
                <div>Select a song</div>

        );
    }
)
