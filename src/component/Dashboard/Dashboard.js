import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";

import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };

    this.deleteProduct = this.deleteProduct.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`).then(response => {
      res => console.log(`deleted product ${id}`).catch(console.log);
      this.props.getInventory();
    });
  }

  editProduct(id) {
    axios.put(`/api/product/${id}`).then(response => {
      res => console.log(`edited product ${id}`).catch(console.log);
    });
  }

  render() {
    console.log("Dashbard State", this.state);
    // if (this.state.isEditing) {
    //   return <div>EDIT WORKS</div>;
    // }
    const items = this.props.inventory.map((e, i) => {
      if (this.state.isEditing) {
        return <div>EDIT WORKS</div>;
      } else {
        return (
          <Product
            key={i}
            productname={e.productname}
            price={e.price}
            imageurl={e.imageurl}
            id={e.id}
            deleteProduct={this.deleteProduct}
            toggleEdit={this.toggleEdit}
            isEditing={this.isEditing}
          />
        );
      }
    });
    return <div className="productwrap">{items}</div>;
  }
}

export default Dashboard;
