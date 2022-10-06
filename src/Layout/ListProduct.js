import React from "react";
import Product1 from "../img/product_1.png";
import Product2 from "../img/product_2.png";
import Product3 from "../img/product_3.png";
import Product4 from "../img/product_4.png";
import Product5 from "../img/product_5.png";
import { Link } from "react-router-dom";

import "./ListProduct.css";
function ListProduct() {
  return (
    <div className="listProduct container-fluid">
      <h6>CAREFULLY CREATED COLLECTIONS </h6>
      <h5>BROWSE OUR CATEGORIES</h5>
      <div className="row listProductImg1">
        <div className="col-md-6">
          <Link to="/shop">
            <img src={Product1} alt="product1" />
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/shop">
            <img src={Product2} alt="product2" />
          </Link>
        </div>
      </div>
      <div className="row listProductImg1">
        <div className="col-md-4">
          <Link to="/shop">
            <img src={Product3} alt="product3" />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/shop">
            <img src={Product4} alt="product4" />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/shop">
            <img src={Product5} alt="product5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
