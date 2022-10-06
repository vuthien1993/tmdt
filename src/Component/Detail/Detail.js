import React, { useState } from "react";
import { useParams } from "react-router-dom";
import convertMoney from "../../convertMoney";
import { useHistory } from "react-router-dom";
import useHttp from "../../hook/use-http";
import { cartAddActions } from "../../Redux/cart";
import { useDispatch } from "react-redux";
import "./Detail.css";

//
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
//
function Detail() {
  const history = useHistory();
  const dispatch = useDispatch();
  //lấy user hiện tại
  const userCurrent = getFromLocalStorage("userCurrent")
    ? getFromLocalStorage("userCurrent")
    : null;
  //khai báo state
  const [amount, setAmount] = useState(1);
  //call api
  const { data } = useHttp({
    url: "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
  });
  //khai báo params
  const params = useParams();
  //lấy dữ liệu chi tiết thông qua id
  const dataDetail = data.filter((ele) => ele._id.$oid === params.id);
  //lấy dữ liệu sản phẩm liên quan
  const dataRelated = data.filter(
    (ele) =>
      ele.category === dataDetail[0].category && ele._id.$oid !== params.id
  );
  //hàm lấy data input
  const changeHandler = (event) => {
    setAmount(event.target.value);
  };
  //khai báo sản phẩm thêm vào giỏ hàng
  const product = dataDetail[0];
  //hàm add sp vào giỏ hàng
  const addCartHandler = () => {
    if (userCurrent) {
      dispatch(cartAddActions.addToCart({ product, amount }));
      alert("them gio hang thanh cong");
      window.location.reload();
    } else {
      alert("vui long dang nhap");
      history.push("/login");
    }
  };

  return (
    <div className="borderDetail">
      {dataDetail.map((ele, i) => {
        return (
          <div key={i} className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img src={ele.img1} alt="img Error" />
              </div>
              <div className="col-md-6">
                <h5>{ele.name}</h5>
                <p>{convertMoney(ele.price)} VND</p>
                <p>{ele.short_desc}</p>
                <p>CATEGORY: {ele.category}</p>
                <div>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={amount}
                    onChange={changeHandler}
                  />
                  <button onClick={addCartHandler}>Add to cart</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="marginTopDetail">
                  <button>DESCRIPTION</button>
                </div>
                <h5>PRODUCT DESCRIPTION</h5>
                <p style={{ whiteSpace: "pre-wrap" }}>{ele.long_desc}</p>
              </div>
            </div>
            <div>
              <h5>RELATED PRODUCT</h5>
              <div className="row">
                {dataRelated.map((ele, i) => {
                  return (
                    <div key={i} className="col-md-4 related">
                      <div>
                        <img src={ele.img1} alt="Img Error" />
                      </div>
                      <h5 className="detailCenter">{ele.name}</h5>
                      <div className="detailCenter">
                        {convertMoney(ele.price)} VND
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Detail;
