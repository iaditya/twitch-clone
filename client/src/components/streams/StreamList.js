import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams, currentUserId, isSignedIn }) => {
  console.log(streams);
  React.useEffect(() => {
    console.log("StreamList use effect");
    fetchStreams();
  }, [fetchStreams]);

  const renderActionButtons = (stream) => {
    if (currentUserId === stream.userId) {
      return (
        <div className="actions">
          <Link to={`streams/edit/${stream.id}`} className="btn btn-primary">
            Edit Stream
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="btn btn-secondary"
          >
            Delete Stream
          </Link>
        </div>
      );
    }
  };

  const renderList = () => {
    return streams.map((item) => {
      return (
        <div className="stream-card" key={item.id}>
          <i className="fa-solid icon fa-camera"></i>

          <div className="content">
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
          </div>
          {renderActionButtons(item)}
        </div>
      );
    });
  };

  return (
    <div className="streams">
      <h2>Streams</h2>
      <div className="stream-list">{renderList()}</div>

      {!!isSignedIn && (
        <div className="create-stream">
          {/* <button className="btn btn-primary">Create Stream</button> */}

          <Link className="btn btn-primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      )}
    </div>
  );
};

function mapsStateToProps(state) {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
}

export default connect(mapsStateToProps, { fetchStreams })(StreamList);
