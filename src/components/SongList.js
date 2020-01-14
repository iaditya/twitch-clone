import React, { Component } from 'react';
import { connect } from 'react-redux';

const matchStateToProps = (state) => {
    //this will pass as props in will call function
    return {
        songs: state.songs
    };
}

export default connect(matchStateToProps)(

    class SongList extends Component {

        render() {
            console.log("SongList renders");
            console.log(this.props.songs);
            return (
                <div>
                    SongList
                </div>
            );
        }
    }
);

