import React from "react";
import banner from "../img/banner1.jpg";
import { Link } from "react-router-dom";

import "./Banner.css";
function Banner() {
  return (
    <React.Fragment>
      <div className="banner">
        <img src={banner} alt="Banner" />
        <div className="bannerContent">
          <p>NEW INSPIRATION 2020</p>
          <h3>20% OFF ON NEW SEASON</h3>
          <div>
            <button>
              <Link to="/shop">Browse collections </Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
