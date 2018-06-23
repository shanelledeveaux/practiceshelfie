import React from "react";

const Product = props => {
  console.log("product props", props);
  return (
    <div>
      <div>{props.productname}</div>
      <div>{props.price}</div>
      <div>{props.imageurl}</div>
    </div>
  );
};

export default Product;
