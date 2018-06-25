import React from "react";
import "./Product.css";

const Product = props => {
  console.log("product props", props);

  return (
    <div className="product">
      <div>{props.productname}</div>
      <div>{props.price}</div>
      <img className="product-img" src={props.imageurl} />
      <div className="prodbuttons">
        <button onClick={() => props.toggleEdit(props.id)}>Edit</button>
        <button onClick={() => props.deleteProduct(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Product;
