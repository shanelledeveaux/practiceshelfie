import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/Header/Header";
import Form from "./component/Form/Form";
import Dashboard from "./component/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get(`/api/inventory`).then(res => {
      this.setState({ inventory: res.data });
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard
          inventory={this.state.inventory}
          getInventory={this.getInventory}
        />
      </div>
    );
  }
}

export default App;
