import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../Redux/login";
import { Link } from "react-router-dom";
//add css
import "./NavBar.css";
function NavBar() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.login.login);
  console.log(show);
  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };
  return (
    <nav className=" container-fluid">
      <div className="row nav">
        <div className="col-md-1 col-sm-2">
          <Link to="/home">Home</Link>
        </div>
        <div className="col-md-1 col-sm-1">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="col-md-5 col-sm-5">
          <Link to="/">BOUTIQUE</Link>
        </div>
        <div className="col-md-2 col-sm-2">
          <span className="fa fa-shopping-cart text-gray"></span>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="col-md-3 col-sm-2">
          <span className="fa fa-user text-gray" />
          {show ? (
            <span>
              <span>{show.name}</span>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
              <span onClick={logoutHandler}>(Logout)</span>
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar;
