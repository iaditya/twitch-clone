import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = (meta) => {
    if (!!meta.touched)
      return <small className="text-danger">{meta.error}</small>;
  };

  renderInput = (formProps) => {
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
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmitHandler)} //this.props.handleSubmit & initialValues[this comes from edit page] is part of redux-form
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

export default reduxForm({
  form: "StreamForm",
  validate: validateForms,
  enableReinitialize: true,
})(StreamForm);
