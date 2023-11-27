import React from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import ContainerRoutes from "../ContainerRoutes.jsx";
import ProductContext from "../context/ProductContext.jsx";

const Products = () => {
  //states
  const [selectedProduct, setSelectedProduct] = React.useState({});

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
      }}
    >
      <div>
        <Navbar />
        <ContainerRoutes />
      </div>
    </ProductContext.Provider>
  );
};

export default Products;
