import React from "react";
import { Field, Form } from "react-final-form";

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
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.onSubmitHandler}
        validate={(formValues) => {
          let errors = {};
          if (!formValues.name) errors.name = "Name is mandatory";
          if (!formValues.description)
            errors.description = "Description is mandatory";
          return errors;
        }}
        render={(props) => (
          <form onSubmit={props.handleSubmit} className="form">
            <Field name="name" component={this.renderInput} label="Name" />
            <Field
              name="description"
              component={this.renderInput}
              label="Description"
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        )}
      />
    );
  }
}

export default StreamForm;
