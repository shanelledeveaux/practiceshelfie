import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/Header/Header";
import Form from "./component/Form/Form";
import Dashboard from "./component/Dashboard/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      editProd: ""
    };
    this.getInventory = this.getInventory.bind(this);
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
    // console.log("APP props", console.log(this.props));
    return (
      <div className="App">
        <Header />
        <div className="page">
          <Form getInventory={this.getInventory} />
          <Dashboard
            inventory={this.state.inventory}
            getInventory={this.getInventory}
          />
        </div>
      </div>
    );
  }
}

export default App;
