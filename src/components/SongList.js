import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(
    (state) => {
        return {
            songs: state.songs
        };
        //this will pass as props in will call function
    })

    (class SongList extends Component {

        render() {
            console.log("SongList renders");
            console.log(this.props.songs);
            return (
                <div>
                    SongList
                </div>
            );
        }
    });

