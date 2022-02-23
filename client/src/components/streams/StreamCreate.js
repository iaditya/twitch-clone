import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmitHandler = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="streams">
        <h2>Create Stream</h2>
        <StreamForm onSubmit={this.onSubmitHandler} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
