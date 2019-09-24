import React from "react";
import styles from "./Input.module.css";

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <>
    <div className={styles.inputHolder}>
      <input
        className={styles.input}
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched &&
        ((error && <span className={styles.error}>{error}</span>) ||
          (warning && <span className={styles.warning}>{warning}</span>))}
    </div>
  </>
);

export default renderField;
