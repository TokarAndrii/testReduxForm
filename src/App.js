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
        <Form></Form>
      </main>
    </div>
  );
}

export default App;
