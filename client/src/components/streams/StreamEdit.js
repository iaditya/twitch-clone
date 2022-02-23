import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamEdit = ({ fetchStream, match, stream }) => {
  useEffect(() => {
    console.log("use effect");
    fetchStream(match.params.id);
  }, [match.params.id, fetchStream]);

  console.log(stream);
  return <div>{stream && stream.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
