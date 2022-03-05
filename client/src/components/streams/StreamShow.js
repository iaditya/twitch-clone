import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = ({ match, fetchStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [match.params.id, fetchStream]);

  if (!stream) {
    return <div>Loading..</div>;
  }
  const { name, description } = stream;
  return (
    <div className="streams">
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
