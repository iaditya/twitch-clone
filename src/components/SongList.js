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

        renderList() {
            return this.props.songs.map((song, index) => {
                return (
                    <div className="item" key={index}>

                        <div className="right floated content">
                            <button className="ui button primary">Select</button>
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

