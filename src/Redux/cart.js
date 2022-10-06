import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
//lay du lieu user hien tai tu local
const userCurrent = getFromLocalStorage("userCurrent")
  ? getFromLocalStorage("userCurrent")
  : [];
//lay gio hang tu local
const cartDetail = getFromLocalStorage("cartDetail")
  ? getFromLocalStorage("cartDetail")
  : [];
//khai bao user hien tai
const owner = userCurrent.email;
//tim gio hang cua user hien tai
const cartOwner = cartDetail.find((ele) => ele.email === owner) ?? [];
//tim gio hang cac user da ton tai
const cartOther = cartDetail.filter((cartItem) => cartItem.email !== owner);
//khai bao state
const initialState = {
  email: owner,
  cartItem: cartOwner.cartItem ?? [],
  totalQuantity: cartOwner.totalQuantity ?? 0,
  totalAmount: cartOwner.totalAmount ?? 0,
};
const cartAdd = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //ham them sp
    addToCart(state, { payload, amount }) {
      const newItem = payload.product;
      const existing = state.cartItem.find(
        (ele) => ele.id === newItem._id.$oid
      );
      if (!existing) {
        console.log("");
        state.cartItem.push({
          id: newItem._id.$oid,
          name: newItem.name,
          img: newItem.img1,
          price: Number(newItem.price),
          quantity: Number(payload.amount),
          totalPrice: newItem.price * payload.amount,
        });
      } else {
        state.cartItem = state.cartItem.map((ele) => {
          if (ele.id === newItem._id.$oid) {
            return {
              ...ele,
              quantity: ele.quantity + Number(payload.amount),
              totalPrice: ele.totalPrice + payload.amount * ele.price,
            };
          } else {
            return ele;
          }
        });
      }
      state.totalQuantity += Number(payload.amount);
      state.totalAmount += newItem.price * payload.amount;
      localStorage.setItem("cartDetail", JSON.stringify([...cartOther, state]));
    },
    //ham tang sp khi click
    cartUp(state, { payload }) {
      const existing = state.cartItem.find((ele) => ele.id === payload.id);
      if (existing) {
        state.cartItem = state.cartItem.map((ele) => {
          if (ele.id === payload.id) {
            return {
              ...ele,
              quantity: ele.quantity + 1,
              totalPrice: ele.totalPrice + ele.price,
            };
          } else {
            return ele;
          }
        });
      }
      state.totalQuantity = state.totalQuantity + 1;
      state.totalAmount += existing.price;
      localStorage.setItem("cartDetail", JSON.stringify([...cartOther, state]));
    },
    //ham giam 1 sp khi click
    cartDown(state, { payload }) {
      const existing = state.cartItem.find((ele) => ele.id === payload.id);
      if (existing && existing.quantity > 1) {
        state.cartItem = state.cartItem.map((ele) => {
          if (ele.id === payload.id) {
            return {
              ...ele,
              quantity: ele.quantity - 1,
              totalPrice: ele.totalPrice - ele.price,
            };
          } else {
            return ele;
          }
        });
      }
      state.totalQuantity = state.totalQuantity - 1;
      state.totalAmount -= existing.price;
      localStorage.setItem("cartDetail", JSON.stringify([...cartOther, state]));
    },
    //ham xoa sp
    deleteProduct(state, { payload }) {
      const index = state.cartItem.findIndex((ele) => ele.id === payload.id);
      state.totalQuantity -= state.cartItem[index].quantity;
      state.totalAmount -= state.cartItem[index].totalPrice;
      state.cartItem.splice(index, 1);
      localStorage.setItem("cartDetail", JSON.stringify([...cartOther, state]));
    },
  },
});

export const cartAddActions = cartAdd.actions;
export default cartAdd.reducer;
