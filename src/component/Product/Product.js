import React, { Component } from "react";
import "./Product.css";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      imageurl: "",
      name: "",
      price: ""
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editProduct = this.editProduct.bind(this);
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

  toggleEdit(id, index) {
    // const { inventory } = this.props;
    // console.log(inventory.indexOf(index), id);
    // if (inventory.indexOf(id) === index) {
    this.setState({ isEditing: !this.state.isEditing });
    // }
  }

  editProduct() {
    axios
      .put(`/api/product/${this.props.id}`, {
        name: this.state.name,
        price: this.state.price,
        imageurl: this.state.imageurl
      })
      .then(response => {
        res =>
          console
            .log(`edited product ${this.props.id}`)
            .then(this.props.getInventory())
            .catch(console.log);
      });
  }

  render() {
    console.log("PRODUCT STATE", this.state);
    return (
      <div>
        {this.state.isEditing ? (
          <div className="product">
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
                  this.editProduct();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="product">
            <div>{this.props.productname}</div>
            <div>{this.props.price}</div>
            <img className="product-img" src={this.props.imageurl} />
            <div className="prodbuttons">
              <button onClick={() => this.toggleEdit()}>Edit</button>
              <button onClick={() => this.props.deleteProduct(this.props.id)}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
