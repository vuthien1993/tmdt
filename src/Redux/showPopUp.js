import { createSlice } from "@reduxjs/toolkit";

const initialState = { showPopUp: false };
const showPopUp = createSlice({
  name: "popup",
  initialState,
  reducers: {
    //hàm hiển thị modal
    showPopUp(state) {
      state.showPopUp = true;
    },
    //hàm ẩn
    hidenPopUp(state) {
      state.showPopUp = false;
    },
  },
});

export const showPopUpActions = showPopUp.actions;
export default showPopUp.reducer;
