import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

const StreamDelete = ({ match, fetchStream, deleteStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [match.params.id, fetchStream]);

  const actions = (
    <React.Fragment>
      <button
        onClick={() => deleteStream(stream.id)}
        className="btn btn-primary"
      >
        Confirm
      </button>
      <Link to="/" className="btn btn-secondary">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream with name: ${stream.name}`;
    }
  };

  return (
    <Modal
      actions={actions}
      title="Delete Stream"
      content={renderContent()}
      onDismiss={() => history.push("/")}
    />
  );
};

function mapsStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
}

export default connect(mapsStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
