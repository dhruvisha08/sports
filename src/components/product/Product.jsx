import React from "react";
import ProductContext from "../../context/ProductContext";
import { PRODUCT_SIZE } from "../../Constants";
import "./product.scss";

const MINI_PRODUCT_LIST = [1, 2, 3, 4, 5];

const Product = () => {
  //variables
  const { selectedProduct } = React.useContext(ProductContext);
  console.log(selectedProduct);
  return (
    <div className="product-details-container row">
      {/* <div className="mini-product-display col-2">
        <div className="img-list">
          {MINI_PRODUCT_LIST.map((img) => {
            return <img className="mini-product-img" src={selectedProduct.images[0]} />;
          })}
        </div>
      </div> */}
      <div className="main-product-display col-7">
        <img src={selectedProduct.images[0]} />;
      </div>
      <div className="product-details col-5">
        <div className="product-name">{selectedProduct.title}</div>
        <div className="product-description">{selectedProduct.description}</div>
        <div className="product-price-container">
          <div>
            <i className="fa fa-inr mr-1 currency-icon"></i>
          </div>
          <div className="product-price">{selectedProduct.price}</div>
        </div>
        <div className="divider"></div>
        <div className="product-size-container">
          <div>
            <b>SELECT SIZE</b>
          </div>
          <div className="d-flex">
            {PRODUCT_SIZE.map((size) => {
              return <div className="size-container">{size}</div>;
            })}
          </div>
        </div>
        <div className="divider"></div>
        <div className="product-cta">
          <button className="add-to-cart-cta">
            <div>
              <i className="fa fa-shopping-bag mr-2" aria-hidden="true"></i>
            </div>
            <div className="cta-name">Add to Cart</div>
          </button>
          <button className="wishlist-cta">
            <div>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div className="cta-name">Wishlist</div>
          </button>
        </div>
        <div className="divider"></div>
        <div className="product-delivery-container">
          <div className="d-flex">
            <div className="title">
              <b>DELIVERY OPTIONS</b>
            </div>
            <div>
              <i class="fa fa-truck" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
