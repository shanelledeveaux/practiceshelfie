import React, { Component } from "react";
import axios from "axios";

import Product from "../Product/Product";

class Dashboard extends Component {
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
    console.log("Dashbard State", this.state.inventory);
    const items = this.state.inventory.map((e, i) => {
      return (
        <Product
          key={i}
          productname={e.productname}
          price={e.price}
          imageurl={e.imageurl}
        />
      );
    });
    return <div>{items}</div>;
  }
}

export default Dashboard;
