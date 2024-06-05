import React from "react";
import FeaturesBtn from "./FeaturesBtn";

const ProductCard = ({ item }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm font-semibold">{item?.price}</span>
      <div className="flex gap-2 items-center">
        { item?.features && item.features.map((i) => (
          <FeaturesBtn key={i} btnTitle={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
