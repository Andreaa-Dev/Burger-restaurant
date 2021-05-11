import { createReducer } from "@reduxjs/toolkit";

import { addOrder, cancelOrder, createCode } from "./action";
import MenuItems from "./data";
import { Code } from "./data";

const initialState = { menuItems: MenuItems, code: ".............." };

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOrder, (state, action) => {
      const id = action.payload;
      const foundItemIndex = state.menuItems.findIndex((item) => {
        return id === item.id;
      });

      state.menuItems[foundItemIndex].amount++;
    })
    .addCase(cancelOrder, (state, action) => {
      const id = action.payload;
      const foundItemIndex = state.menuItems.findIndex((item) => {
        return id === item.id;
      });

      if (state[foundItemIndex].amount === 0) {
        return state;
      }

      state.menuItems[foundItemIndex].amount--;
    })
    .addCase(createCode, (state, action) => {
      let i;
      let newCode = "";
      for (i = 0; i < 6; i++) {
        newCode += Code[Math.floor(Math.random() * Code.length)];
      }
      state.code = newCode;
    });
});

export default orderReducer;

// state = initialState:object
