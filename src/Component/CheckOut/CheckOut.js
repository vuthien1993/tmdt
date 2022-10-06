import React from "react";
import convertMoney from "../../convertMoney";
import "./CheckOut.css";

function CheckOut() {
  const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
  const userCurrent = getFromLocalStorage("userCurrent") ?? [];
  const cartDetail = getFromLocalStorage("cartDetail") ?? [];
  const dataBilling = cartDetail.find((ele) => ele.email === userCurrent.email);
  console.log(dataBilling);
  return (
    <React.Fragment>
      <div className="bannerShop">
        <div className=" container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h1>CHECKOUT</h1>
            </div>
            <div className="col-md-2">
              <p>CHECKOUT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="billingDetail">
        <div>
          <h3>BILLING DETAILS</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div>
                <p>FULL NAME:</p>
                <input placeholder="Enter your full name here!" />
              </div>
              <div>
                <p>EMAIL:</p>

                <input placeholder="Enter Your Email Here!" />
              </div>
              <div>
                <p>PHONE NUMBER:</p>

                <input placeholder="Enter Your Phone Number Here!" />
              </div>
              <div>
                <p>ADDRESS:</p>

                <input placeholder="Enter Your Address Here!" />
              </div>
              <div>
                <button>Place Order</button>
              </div>
            </div>
            <div className="col-md-5 yourOrder">
              <h5>YOUR ORDER</h5>
              {dataBilling &&
                dataBilling.cartItem.map((ele) => {
                  return (
                    <React.Fragment>
                      <p>
                        <span>{ele.name} </span>
                        <span className="textGray">
                          {convertMoney(ele.price)} VND X {ele.quantity}
                        </span>
                      </p>
                      <hr></hr>
                    </React.Fragment>
                  );
                })}
              {dataBilling && (
                <p>
                  <span>TOTAL</span>
                  <span className="padding textGray">
                    {convertMoney(dataBilling.totalAmount)} VND
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CheckOut;
