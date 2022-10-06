import React, { useState } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hook/use-http";
import convertMoney from "../../convertMoney";
import "./ProductList.css";
function ProductList() {
  //call api lấy dữ liệu từ api
  const { data } = useHttp({
    url: "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
  });
  //khai báo các state hiển thị theo danh mục menu
  const [showAll, setShowAll] = useState(true);
  const [showIphone, setShowIphone] = useState(false);
  const [showIpad, setShowIpad] = useState(false);
  const [showWatch, setShowWatch] = useState(false);
  const [showAirpod, setShowAirpod] = useState(false);
  //tìm dữ liệu thích hợp cho từng menu
  const dataIphone = data.filter((ele) => ele.category === "iphone");
  const dataIpad = data.filter((ele) => ele.category === "ipad");
  const dataWatch = data.filter((ele) => ele.category === "watch");
  const dataAirpod = data.filter((ele) => ele.category === "airpod");
  //hàm hiển thị theo danh mục menu
  const showIphoneHandler = () => {
    setShowIphone(true);
    setShowAll(false);
    setShowAirpod(false);
    setShowIpad(false);
    setShowWatch(false);
  };
  const showAllHandler = () => {
    setShowIphone(false);
    setShowAll(true);
    setShowAirpod(false);
    setShowIpad(false);
    setShowWatch(false);
  };
  const showIpadHandler = () => {
    setShowIphone(false);
    setShowAll(false);
    setShowAirpod(false);
    setShowIpad(true);
    setShowWatch(false);
  };
  const showWatchHandler = () => {
    setShowIphone(false);
    setShowAll(false);
    setShowAirpod(false);
    setShowIpad(false);
    setShowWatch(true);
  };
  const showAirpodHandler = () => {
    setShowIphone(false);
    setShowAll(false);
    setShowAirpod(true);
    setShowIpad(false);
    setShowWatch(false);
  };
  const hidenHandler = () => {
    setShowIphone(false);
    setShowAll(false);
    setShowAirpod(false);
    setShowIpad(false);
    setShowWatch(false);
  };

  return (
    <React.Fragment>
      <div className="bannerShop">
        <div className=" container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h1>SHOP</h1>
            </div>
            <div className="col-md-2">
              <p>SHOP</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navshop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 navbarshop">
              <h5>CATEGORIES</h5>
              <h6 className="blackBackground">APPLE</h6>
              <p onClick={showAllHandler}>ALL</p>
              <h6 className="backgroundP">IPHONE & MAC</h6>
              <p onClick={showIphoneHandler}>Iphone</p>
              <p onClick={showIpadHandler}>Ipad</p>
              <p onClick={hidenHandler}>Macbook</p>
              <h6 className="backgroundP">WIRELESS</h6>
              <p onClick={showAirpodHandler}>Airpod</p>
              <p onClick={showWatchHandler}>Watch</p>
              <h6 className="backgroundP">OTHER</h6>
              <p onClick={hidenHandler}>Mouse</p>
              <p onClick={hidenHandler}>Keyboard</p>
              <p onClick={hidenHandler}>Other</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <input placeholder="enter search here" />
                </div>
                <div className="col-md-8 rightShop">
                  <select>
                    <option value="default">Default sorting</option>
                    <option value="DownToUp">Price: Low to High</option>
                    <option value="UpToDown">Price: High to Low</option>
                  </select>
                </div>
              </div>
              {showAll && (
                <div className="row imgAll">
                  {data.map((ele, i) => {
                    return (
                      <div key={i} className="col-md-4">
                        <Link to={`/detail/${ele._id.$oid}`}>
                          <img src={ele.img1} alt="img error" />
                        </Link>
                        <p style={{ color: "black " }}>{ele.name}</p>
                        <p>{convertMoney(ele.price)} VND</p>
                      </div>
                    );
                  })}
                </div>
              )}
              {showIphone && (
                <div className="row imgAll">
                  {dataIphone.map((ele, i) => {
                    return (
                      <div key={i} className="col-md-4">
                        <Link to={`/detail/${ele._id.$oid}`}>
                          <img src={ele.img1} alt="img error" />
                        </Link>
                        <p style={{ color: "black " }}>{ele.name}</p>
                        <p>{convertMoney(ele.price)} VND</p>
                      </div>
                    );
                  })}
                </div>
              )}
              {showIpad && (
                <div className="row imgAll">
                  {dataIpad.map((ele, i) => {
                    return (
                      <div key={i} className="col-md-4">
                        <Link to={`/detail/${ele._id.$oid}`}>
                          <img src={ele.img1} alt="img error" />
                        </Link>
                        <p style={{ color: "black " }}>{ele.name}</p>
                        <p>{convertMoney(ele.price)} VND</p>
                      </div>
                    );
                  })}
                </div>
              )}
              {showAirpod && (
                <div className="row imgAll">
                  {dataAirpod.map((ele, i) => {
                    return (
                      <div key={i} className="col-md-4">
                        <Link to={`/detail/${ele._id.$oid}`}>
                          <img src={ele.img1} alt="img error" />
                        </Link>
                        <p style={{ color: "black " }}>{ele.name}</p>
                        <p>{convertMoney(ele.price)} VND</p>
                      </div>
                    );
                  })}
                </div>
              )}
              {showWatch && (
                <div className="row imgAll">
                  {dataWatch.map((ele, i) => {
                    return (
                      <div key={i} className="col-md-4">
                        <Link to={`/detail/${ele._id.$oid}`}>
                          <img src={ele.img1} alt="img error" />
                        </Link>
                        <p style={{ color: "black " }}>{ele.name}</p>
                        <p>{convertMoney(ele.price)} VND</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
