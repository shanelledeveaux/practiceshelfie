import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";

import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`).then(response => {
      res => console.log(`deleted product ${id}`).catch(console.log);
      this.props.getInventory();
    });
  }

  render() {
    console.log("Dashbard Props", this.props);
    const items = this.props.inventory.map((e, i) => {
      return (
        <Product
          key={i}
          productname={e.productname}
          price={e.price}
          imageurl={e.imageurl}
          id={e.id}
          deleteProduct={this.deleteProduct}
        />
      );
    });
    return <div className="productwrap">{items}</div>;
  }
}

export default Dashboard;
