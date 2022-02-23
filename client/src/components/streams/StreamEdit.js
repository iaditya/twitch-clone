import { pick } from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ fetchStream, match, stream, editStream }) => {
  useEffect(() => {
    console.log("use effect");
    fetchStream(match.params.id);
  }, [match.params.id, fetchStream]);

  const onSubmitHandler = (formValues) => {
    editStream(stream.id, formValues);
  };

  return (
    <div className="streams">
      <h2>
        Edit Stream <span className=""></span>
      </h2>
      <StreamForm
        initialValues={pick(stream, "name", "description")}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
