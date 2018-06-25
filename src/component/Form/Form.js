import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageurl: "",
      name: "",
      price: ""
    };

    this.initialState = this.state;
    this.submitProducts = this.submitProducts.bind(this);
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
      .then(this.props.getInventory());
    // this.setState({ imageurl: res.data }));
  };

  render() {
    console.log("form STATE", this.state);

    return (
      <div className="form">
        Image URL:
        <input
          value={this.state.imageurl}
          onChange={e => this.handleURL(e.target.value)}
        />
        Product Name:
        <input
          value={this.state.name}
          onChange={e => this.handleName(e.target.value)}
        />
        Price:
        <input
          value={this.state.price}
          onChange={e => this.handlePrice(e.target.value)}
        />
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
