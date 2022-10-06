import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../../hook/use-http";
import convertMoney from "../../convertMoney";
import PopUpDetail from "../ModalHome/PopUpDetail";
import { showPopUpActions } from "../../Redux/showPopUp";
import "./HomeListProduct.css";
function HomeListProduct() {
  //call api
  const { data, httpError, isLoading } = useHttp({
    url: "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
  });
  //chọn state từ redux-toolkit
  const show = useSelector((state) => state.showPopUp.showPopUp);
  const dispatch = useDispatch();
  //khai báo các state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [short_desc, setShort_desc] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState("");
  //hàm hiển thị
  const showPopUp = (ele) => {
    setId(ele._id);
    setName(ele.name);
    setPrice(ele.price);
    setShort_desc(ele.short_desc);
    setImg(ele.img1);
    dispatch(showPopUpActions.showPopUp());
  };
  //hàm ẩn
  const hidenPopUp = () => {
    dispatch(showPopUpActions.hidenPopUp());
  };
  //khai báo data khi click
  const dataClick = {
    id: id,
    name: name,
    img: img,
    price: price,
    short_desc: short_desc,
    hidenPopUp: hidenPopUp,
  };
  if (isLoading) {
    return (
      <section>
        <p className="isLoading">Loading .....</p>
      </section>
    );
  }
  //nếu api lổi thì báo lổi ra màn hình
  if (httpError) {
    return (
      <section>
        <p className="error">{httpError}</p>
      </section>
    );
  }
  return (
    <React.Fragment>
      {show && <PopUpDetail detail={data} dataDetail={dataClick} />}
      <div className="homeLPr">
        <h6>MADE THE HARD WAY</h6>
        <h5>TOP TRENDING PRODUCTS</h5>
      </div>
      <div className="container-fluid">
        <div className="homeLPr row">
          {data.map((ele, i) => {
            return (
              <div key={i} className="col-md-3">
                <img
                  src={ele.img1}
                  alt="img-error"
                  onClick={() => showPopUp(ele)}
                />
                <p style={{ color: "black " }}>{ele.name}</p>
                <p className="centerHome">{convertMoney(ele.price)} VND</p>
              </div>
            );
          })}
        </div>
        <div className="other row">
          <div className="col-md-4">
            <h5>FREE SHIPPING</h5>
            <p>Free shipping </p>
          </div>
          <div className="col-md-4">
            <h5>24 X 7 SERVICE</h5>
            <p>Free shipping </p>
          </div>
          <div className="col-md-4">
            <h5>FESTIVAL OFFER</h5>
            <p>Free shipping </p>
          </div>
        </div>
        <div className="row homeLPr">
          <div className="col-md-6">
            <h5>LES'S BE FRIENDS!</h5>
            <p>Nisi nisi tempor cocnsequat laboris nisi</p>
          </div>
          <div className="col-md-6 right">
            <input placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeListProduct;
