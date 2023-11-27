import React from "react";
import ProductList from "../productList/ProductList";

const Shoes = () => {

  const [shoesList,setShoesList] = React.useState([])
    
  React.useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories/4/products")
      .then((res) => res.json())
      .then((json) => setShoesList(json));
  }, []);
  return (
    <div>
      <ProductList productList={shoesList} />
    </div>
  );
};

export default Shoes;
