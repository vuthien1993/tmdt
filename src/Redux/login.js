import { createSlice } from "@reduxjs/toolkit";

//lấy dữ liệu user hiện tại ở local
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const userCurrent = getFromLocalStorage("userCurrent")
  ? getFromLocalStorage("userCurrent")
  : null;

const initialState = { login: userCurrent };
const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    //ham logout
    logout(state) {
      localStorage.removeItem("userCurrent");
      window.location.reload();
    },
  },
});
export const loginActions = login.actions;
export default login.reducer;
