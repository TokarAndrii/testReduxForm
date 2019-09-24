import React from "react";
import logo from "./logo.svg";
import feduxFormImg from "./reduxForm.png";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="react-logo" />
          <img src={feduxFormImg} className="App-logo" alt="redux-form-logo" />
        </div>
        <p>Redux-form</p>
      </header>
      <main>
        <div className="container">
          <h2>Form registrations</h2>
          <Form></Form>
        </div>
      </main>
    </div>
  );
}

export default App;
