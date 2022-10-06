import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAddActions } from "../Redux/cart";
import convertMoney from "../convertMoney";
import "./CartPage.css";

//lấy dữ liệu giỏ hàng từ local
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const cartDetail = getFromLocalStorage("cartDetail") ?? [];
//component
function CartPage() {
  //lấy user hiện tại từ local
  const userCurrent = getFromLocalStorage("userCurrent") ?? [];

  const dispatch = useDispatch();
  //tìm dữ liệu giỏ hàng cho user hiện tại
  const cartUserCurrent = cartDetail.find(
    (ele) => ele.email === userCurrent.email
  );
  //hàm tăng sp khi click
  const upClickHandler = (ele) => {
    const id = ele.id;
    dispatch(cartAddActions.cartUp({ id }));
    window.location.reload();
  };
  //hàm giảm số lượng sp khi click
  const downClickHandler = (ele) => {
    const id = ele.id;
    if (ele.quantity > 1) {
      dispatch(cartAddActions.cartDown({ id }));
      window.location.reload();
    } else {
      alert("so luong khong the nho hon 1");
    }
  };
  //hàm xóa sp khỏi giỏ hàng
  const deleteProductHandler = (ele) => {
    const id = ele.id;
    dispatch(cartAddActions.deleteProduct({ id }));
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="bannerShop">
        <div className=" container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h1>CART</h1>
            </div>
            <div className="col-md-2">
              <p>CART</p>
            </div>
          </div>
        </div>
      </div>
      <div className="borderCartPage">
        <h3>SHOPPING CART</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <p className="col-md-2">IMAGE</p>
                <p className="col-md-2">PRODUCT</p>
                <p className="col-md-2">PRICE</p>
                <p className="col-md-2">QUANTITY</p>
                <p className="col-md-2">TOTAL</p>
                <p className="col-md-2">REMOVE</p>
              </div>
              <div className="row product">
                {/* kiểm tra xem có user đăng nhập không */}
                {cartUserCurrent &&
                  cartUserCurrent.cartItem.map((ele, i) => {
                    return (
                      <React.Fragment key={i}>
                        <div className="col-md-2">
                          <img src={ele.img} alt="img Error" />
                        </div>
                        <div className="col-md-2">
                          <p>{ele.name}</p>
                        </div>
                        <div className="col-md-2">
                          <p>{convertMoney(ele.price)} VND</p>
                        </div>
                        <div className="col-md-2">
                          <p>
                            <span
                              className="fa fa-caret-left"
                              aria-hidden="true"
                              onClick={() => downClickHandler(ele)}
                            />
                            {ele.quantity}
                            <span
                              className="fa fa-caret-right"
                              aria-hidden="true"
                              onClick={() => upClickHandler(ele)}
                            />
                          </p>
                        </div>
                        <div className="col-md-2">
                          <p>{convertMoney(ele.totalPrice)} VND</p>
                        </div>
                        <div className="col-md-2">
                          <span
                            onClick={() => deleteProductHandler(ele)}
                            className="fa fa-trash"
                            aria-hidden="true"
                          ></span>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
              <div className="row cartContineu">
                <p className="col-md-6">
                  <Link to="/shop">
                    <span
                      className="fa fa-long-arrow-left"
                      aria-hidden="true"
                    />
                    Continue Shopping
                  </Link>
                </p>
                <p className="col-md-6 textAlignRight">
                  <Link to="/checkout">
                    Proceed to checkout
                    <span
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    />
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4 cartTotal ">
              <h5>CART TOTAL</h5>
              <p>
                SUBTOTAL
                <span>
                  {cartUserCurrent && convertMoney(cartUserCurrent.totalAmount)}{" "}
                  VND
                </span>
              </p>
              <hr />
              <p>
                TOTAL
                <span>
                  {cartUserCurrent && convertMoney(cartUserCurrent.totalAmount)}{" "}
                  VND
                </span>
              </p>
              <div>
                <input placeholder="Enter your coupon" />
              </div>
              <div>
                <button>
                  <i className="fa fa-gift" aria-hidden="true"></i> Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartPage;
