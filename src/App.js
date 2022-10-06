import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./page/HomePage";
import "./App.css";
import Detail from "./Component/Detail/Detail";
import ShopPage from "./page/ShopPage";
import CartPage from "./page/CartPage";
import LoginPage from "./page/LoginPage";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import SignUp from "./Component/SignUp/SignUp";
import CheckOut from "./Component/CheckOut/CheckOut";
//deloy firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0SalvYLr8cT2Eb0yWuz5gqc8MZbQb6uw",
  authDomain: "asm3-tmdt.firebaseapp.com",
  projectId: "asm3-tmdt",
  storageBucket: "asm3-tmdt.appspot.com",
  messagingSenderId: "779904663855",
  appId: "1:779904663855:web:aa6108019536a1bd7161da",
  measurementId: "G-30R4CDL5CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
