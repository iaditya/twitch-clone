import React, { useEffect, useRef } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = ({ match, fetchStream, stream }) => {
  const videoRef = useRef(null);
  const streamFetched = !!stream && stream.id;
  let id = match.params.id;
  useEffect(() => {
    fetchStream(id);

    if (streamFetched) {
      console.log("makes player");
      let player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    }
  }, [id, fetchStream, streamFetched]);

  if (!stream) {
    return <div>Loading..</div>;
  }
  const { name, description } = stream;
  return (
    <div className="streams">
      <video style={{ width: "100%" }} controls ref={videoRef} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
