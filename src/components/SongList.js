import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const matchStateToProps = (state) => {
    //this will pass as props in will call function
    console.log(state);
    return {
        songs: state.songs
    };
}

export default connect(matchStateToProps, { selectSong })(

    class SongList extends Component {

        renderList() {
            return this.props.songs.map((song, index) => {
                return (
                    <div className="item" key={index}>

                        <div className="right floated content">
                            <button
                                onClick={() => this.props.selectSong(song)}
                                className="ui button primary">
                                Select
                                </button>
                        </div>

                        <div className="content">{song.title}</div>
                    </div>
                )
            })
        }

        render() {
            return (
                <div className="ui divided list">
                    {this.renderList()}
                </div>
            );
        }
    }
);

