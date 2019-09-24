import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field, reduxForm } from "redux-form";
import MyInput from "./input/Input";
import { initReducer, loadAction } from "./duck/init";
import {
  required,
  minLength,
  email,
  maxLength,
  phoneNumber,
  documentNumber
} from "./utils//validations";
import styles from "./Form.module.css";

const MAX_LENGTH = 20;
const MIN_LENGTH = 5;

const DOCUMENTS = ["BIRTHDAY LICENSE", "PASSPORT"];

const data = { documentType: DOCUMENTS[1] };

class InputForm extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    const { load } = this.props;
    load(data);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      console.log(this.props) || (
        <Form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <label className={styles.label}>First Name:</label>
            <>
              <Field
                name="firstName"
                component={MyInput}
                type="text"
                placeholder="First Name"
                validate={[
                  required,
                  minLength(MIN_LENGTH),
                  maxLength(MAX_LENGTH)
                ]}
              />
            </>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Last Name:</label>
            <>
              <Field
                name="lastName"
                component={MyInput}
                type="text"
                placeholder="Last Name"
                validate={[
                  required,
                  minLength(MIN_LENGTH),
                  maxLength(MAX_LENGTH)
                ]}
              />
            </>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Email:</label>
            <>
              <Field
                name="email"
                component={MyInput}
                type="email"
                placeholder="example@domain.com"
                validate={[required, email]}
              />
            </>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Phone:</label>
            <>
              <Field
                name="phone"
                component={MyInput}
                type="text"
                placeholder="+380"
                validate={[required, phoneNumber]}
              />
            </>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Document:</label>
            <>
              <Field
                name="documentType"
                component="select"
                className={styles.select}
              >
                {DOCUMENTS.map(document => (
                  <option value={document} key={document}>
                    {document}
                  </option>
                ))}
              </Field>
            </>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Document number:</label>
            <>
              <Field
                name="documentNumber"
                component={MyInput}
                type="text"
                placeholder="AA123456"
                validate={[required, documentNumber]}
              />
            </>
          </div>
        </Form>
      )
    );
  }
}

// export default reduxForm({
//   form: "logInForm",
//   enableReinitialize: true
// })(InputForm);

InputForm = reduxForm({
  form: "logInForm"
})(InputForm);

const mstp = state => ({
  initialValues: state.init.data
});
const mdtp = {
  load: loadAction
};

InputForm = connect(
  mstp,
  mdtp
)(InputForm);

export default InputForm;
