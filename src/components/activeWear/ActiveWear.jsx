import React from "react";
import ProductList from "../productList/ProductList";
import { POLO_TSHIRT_PRODUCT_LIST } from "../../data/poloTshirt";

const ActiveWear = () => {
  return (
    <div>
      <ProductList productList={POLO_TSHIRT_PRODUCT_LIST} />
    </div>
  );
};

export default ActiveWear;
