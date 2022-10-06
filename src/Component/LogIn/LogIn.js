import React from "react";
import { useHistory } from "react-router-dom";
import banner from "../../img/banner1.jpg";
import { Link } from "react-router-dom";
import useInput from "../../hook/use-input";
import "./LogIn.css";

function LogIn() {
  const history = useHistory();
  //lấy data từ localStorage
  const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
  const userArr = getFromLocalStorage("userArr")
    ? getFromLocalStorage("userArr")
    : [];
  //khai báo giá trị và sử dụng custom hook để xử lý validate input
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsvalid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 7);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsvalid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  //khai báo kiểm tra form nhập đầy đủ chưa
  let formIsvalid = false;

  //ham submit data
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredPasswordIsvalid && !enteredEmailIsvalid) {
      return;
    }
    //tìm kiểm tra xem tài khoản đã nhập có trong mảng data không
    const user = userArr.find(
      (mov) => mov.email === enteredEmail && mov.password === enteredPassword
    );

    //nếu có lưu  userCurrent vào localStorage ngươc lại thì thông báo cho người dùng kiểm tra lại
    if (user) {
      localStorage.setItem("userCurrent", JSON.stringify(user));
      alert("dang nhap thanh cong");
      history.push("/home");
      window.location.reload();
    } else {
      alert("email hoac password chua chinh xac");
      resetPasswordInput();
    }
  };
  //kiểm tra nếu nhập đúng thì trả về true
  if (enteredPasswordIsvalid && enteredEmailIsvalid) {
    formIsvalid = true;
  }
  //khai báo gán class báo lổi
  const passwordInputClasses = passwordInputHasError ? " invalid" : "";
  const emailInputClasses = emailInputHasError ? " invalid" : "";

  return (
    <div className="backgroundLogin">
      <img src={banner} alt="Img Error" />
      <div className="borderFormLogin">
        <h1>SIGN IN</h1>
        <form onSubmit={formSubmitHandler}>
          <div className={emailInputClasses}>
            <input
              type="text"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className="error-text">Please enter a valid email</p>
            )}
          </div>
          <div className={passwordInputClasses}>
            <input
              type="password"
              placeholder="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && (
              <p className="error-text">Please enter password</p>
            )}
          </div>
          <div className="buttonDisabled">
            <button type="submit" disabled={!formIsvalid}>
              SIGN IN
            </button>
          </div>
          <p>
            <span>create an account ?</span>{" "}
            <Link to="/register">
              <span>Sign up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
