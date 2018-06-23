import React, { Component } from "react";
// import axios from "axios";

import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("Dashbard State", this.state.inventory);
    const items = this.props.inventory.map((e, i) => {
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
