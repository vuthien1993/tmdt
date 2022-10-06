import React from "react";
import { useHistory } from "react-router-dom";
import banner from "../../img/banner1.jpg";
import useInput from "../../hook/use-input";

import { Link } from "react-router-dom";
import "./SignUp.css";
// khai báo userArr
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const userArr = getFromLocalStorage("userArr")
  ? getFromLocalStorage("userArr")
  : [];

function SignUp() {
  const history = useHistory();

  let emailInputAvalaible = false;
  //validate input bằng custom hook use-input
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
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  //kiem tra email nhap vao da được sd chưa
  userArr.forEach((ele) => {
    if (ele.email === enteredEmail) {
      emailInputAvalaible = true;
    }
    return emailInputAvalaible;
  });

  const {
    value: enteredName,
    isValid: enteredNameIsvalid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsvalid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.length > 9);
  let formIsvalid = false;

  if (
    enteredNameIsvalid &&
    enteredEmailIsvalid &&
    enteredPasswordIsvalid &&
    enteredPhoneIsvalid &&
    !emailInputAvalaible
  ) {
    formIsvalid = true;
  }
  //ham submit data
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredPasswordIsvalid && !enteredEmailIsvalid) {
      return;
    }
    resetPasswordInput();
    resetEmailInput();
    resetNameInput();
    resetPhoneInput();
    const userArrSubmit = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    };
    userArr.push(userArrSubmit);
    //luu data vao localStorage
    localStorage.setItem("userArr", JSON.stringify(userArr));
    //thong bao dang ky thanh cong
    alert("dang ky thanh cong");

    //dieu huong den trang login
    history.push("/login");
  };
  const passwordInputClasses = passwordInputHasError ? " invalid" : "";
  const emailInputClasses = emailInputHasError ? " invalid" : "";
  const nameInputClasses = nameInputHasError ? " invalid" : "";
  const phoneInputClasses = phoneInputHasError ? " invalid" : "";

  return (
    <div className="backgroundSignUp">
      <img src={banner} alt="Img Error" />
      <div className="borderSignUp">
        <h1>SING UP</h1>
        <form onSubmit={formSubmitHandler}>
          <div className={nameInputClasses}>
            <input
              placeholder="Full Name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <p className="error-text">Please enter name</p>
            )}
          </div>
          <div className={emailInputClasses}>
            <input
              placeholder="Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className="error-text">Please enter a valid email</p>
            )}
            {emailInputAvalaible && (
              <p className="error-text">
                This email is already in use, please enter another email
              </p>
            )}
          </div>
          <div className={passwordInputClasses}>
            <input
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordInputHasError && (
              <p className="error-text">
                Please enter password, password is larger than 8 characters
              </p>
            )}
          </div>
          <div className={phoneInputClasses}>
            <input
              placeholder="Phone"
              type="number"
              value={enteredPhone}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            {phoneInputHasError && (
              <p className="error-text">
                Please enter phone, phone is larger than 8 characters
              </p>
            )}
          </div>
          <div className="buttonDisabled">
            <button disabled={!formIsvalid} type="submit">
              SIGN UP
            </button>
          </div>
          <p>
            <span>Login?</span>
            <Link to="/login">
              <span>Click</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
