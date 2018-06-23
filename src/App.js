import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Form from "./component/Form/Form";
import Dashboard from "./component/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard />
      </div>
    );
  }
}

export default App;
