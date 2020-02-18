import React, { Component } from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  console.log(props);
  if (!props.song) {
    return (
      <div>
        <h4>Select a song</h4>
      </div>
    );
  }
  return (
    <div>
      <h4>Song Details</h4>
      <p>
        {props.song.title}
        <br />
        {props.song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
