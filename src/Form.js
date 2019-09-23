import React, { Component } from "react";
import { Form, Field, reduxForm } from "redux-form";

class InputForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      console.log(this.props) || (
        <Form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
        </Form>
      )
    );
  }
}

export default reduxForm({
  form: "logInForm"
})(InputForm);
