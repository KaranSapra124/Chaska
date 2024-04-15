import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    saveItem(state, action) {
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    getItem(state) {
      state.items = JSON.parse(localStorage.getItem("cart"));
    },
  },
});

export const { addItem, removeItem, saveItem , getItem} = cartSlice.actions;
export default cartSlice.reducer;
