import React from "react";

const Product = props => {
  console.log("product props", props);
  return (
    <div>
      <div>{props.productname}</div>
      <div>{props.price}</div>
      <img className="product-img" src={props.imageurl} />
    </div>
  );
};

export default Product;
