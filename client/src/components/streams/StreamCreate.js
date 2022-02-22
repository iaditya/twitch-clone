import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = (meta) => {
    if (!!meta.touched)
      return <small className="text-danger">{meta.error}</small>;
  };

  renderInput = (formProps) => {
    console.log(formProps.meta);
    return (
      <div
        className={`field ${
          formProps.meta.touched && formProps.meta.error ? "error" : ""
        }`}
      >
        <label>{formProps.label}</label>
        <input autoComplete="off" type="text" {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmitHandler = (formValues) => {
    this.props.createStream(formValues);
  };

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

const validateForms = (formValues) => {
  let errors = {};
  if (!formValues.name) errors.name = "Name is mandatory";
  if (!formValues.description) errors.description = "Description is mandatory";

  return errors;
};

// function mapStateToProps(state) {
//   return {
//     data: state,
//   };
// }

const formWrapped = reduxForm({
  form: "StreamCreate",
  validate: validateForms,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
