import { createReducer } from "@reduxjs/toolkit";

import { addOrder, cancelOrder } from "./action";
import MenuItems from "./data";

const initialState = MenuItems;

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOrder, (state, action) => {
      const id = action.payload;
      const foundItemIndex = state.findIndex((item) => {
        return id === item.id;
      });

      state[foundItemIndex].amount++;
    })
    .addCase(cancelOrder, (state, action) => {
      const id = action.payload;
      const foundItemIndex = state.findIndex((item) => {
        return id === item.id;
      });

      if (state[foundItemIndex].amount === 0) {
        return state;
      }

      state[foundItemIndex].amount--;
    });
});

export default orderReducer;
