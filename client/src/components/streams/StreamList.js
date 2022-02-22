import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams }) => {
  console.log(streams);
  React.useEffect(() => {
    console.log("StreamList use effect");
    fetchStreams();
  }, []);

  const renderList = () => {
    return streams.map((item) => {
      return (
        <div className="stream-card" key={item.id}>
          <i className="fa-solid icon fa-camera"></i>

          <div className="content">
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="streams">
      <h2>Streams</h2>
      <div className="stream-list">{renderList()}</div>
    </div>
  );
};

function mapsStateToProps(state) {
  return { streams: Object.values(state.streams) };
}

export default connect(mapsStateToProps, { fetchStreams })(StreamList);
