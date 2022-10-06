import React from "react";
import Banner from "../Layout/Banner";
import ListProduct from "../Layout/ListProduct";
import HomeListProduct from "../Component/HomeListProduct/HomeListProduct";
function HomePage() {
  return (
    <div>
      <Banner />
      <ListProduct />
      <HomeListProduct />
    </div>
  );
}

export default HomePage;
