import React from "react";

export const GridPageItem = ({ title, image, price }) => {
  return (
    <div className="grid--item">
      <h3 className="grid-product">{title}</h3>
      <img className="grid--image" src={image} alt="" />
      <h4 className="grid-price">{price}</h4>
    </div>
  );
};
