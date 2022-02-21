import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input autoComplete="off" type="text" {...formProps.input} />
      </div>
    );
  }

  onSubmitHandler(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmitHandler)}
        className="form"
      >
        <Field name="name" component={this.renderInput} label="Name" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "StreamCreate",
})(StreamCreate);
