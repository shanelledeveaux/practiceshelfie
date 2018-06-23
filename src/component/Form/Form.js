import React, { Component } from "react";
// import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      name: "",
      price: ""
    };

    this.initialState = this.state;
  }

  handleURL(image) {
    this.setState({ image: image });
  }

  handleName(name) {
    this.setState({ name: name });
  }

  handlePrice(price) {
    this.setState({ price: price });
  }

  resetForm = () => {
    this.setState(this.initialState);
  };

  render() {
    console.log("STATE", this.state);

    return (
      <div className="form">
        Image URL:
        <input onChange={e => this.handleURL(e.target.value)} />
        Product Name:
        <input onChange={e => this.handleName(e.target.value)} />
        Price:
        <input onChange={e => this.handlePrice(e.target.value)} />
        <div className="btncontr">
          <button>Add</button>
          <button onClick={this.resetForm}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Form;
