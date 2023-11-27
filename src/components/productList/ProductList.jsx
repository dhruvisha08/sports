import React from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../context/ProductContext";
import { PRODUCT_SIZE } from "../../Constants";
import "../style.scss";


const ProductList = ({ productList }) => {
  //variables
  const navigate = useNavigate();
  const { setSelectedProduct } = React.useContext(ProductContext);

  return productList.length > 0 ? (
    <div className="product-list-container">
      {productList.map((product) => {
        return (
          <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
            <div
              className="card"
              onClick={() => {
                navigate(`/${product.id}`);
                setSelectedProduct(product);
              }}
            >
              <div className="card-img">
                <img className="product-img" src={product.images[0]} />
              </div>
              <div className="card-body">
                <div className="product-title">{product.title}</div>
                <div className="product-description">{product.description}</div>
                <div className="price-section">
                  <div className="size-section">
                    {PRODUCT_SIZE.map((size) => {
                      return <p className="size">{size}</p>;
                    })}
                  </div>
                  <div className="price d-flex">
                    <div>
                      <i className="fa fa-inr mr-1 currency-icon"></i>
                    </div>
                    <div className="product-price">{product.price}</div>
                  </div>
                </div>
              </div>
              <div className="cta">
                <button className="add-to-cart-cta">Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    ""
  );
};

export default ProductList;
