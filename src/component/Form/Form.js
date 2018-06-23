import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageurl: "",
      name: "",
      price: ""
    };

    this.initialState = this.state;
  }

  handleURL(imageurl) {
    this.setState({ imageurl: imageurl });
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

  submitProducts = () => {
    axios
      .post("/api/product", {
        name: this.state.name,
        price: this.state.price,
        imageurl: this.state.imageurl
      })
      .then(res => console.log(res.data));
    // this.setState({ imageurl: res.data }));
  };

  render() {
    console.log("form STATE", this.state);

    return (
      <div className="form">
        Image URL:
        <input onChange={e => this.handleURL(e.target.value)} />
        Product Name:
        <input onChange={e => this.handleName(e.target.value)} />
        Price:
        <input onChange={e => this.handlePrice(e.target.value)} />
        <div className="btncontr">
          <button
            onClick={() => {
              this.submitProducts();
            }}
          >
            Add
          </button>
          <button onClick={this.resetForm}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Form;
