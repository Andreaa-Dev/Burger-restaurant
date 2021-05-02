import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducer";

export default configureStore({
  reducer: { orderReducer: orderReducer },
});

//{ orderReducer: [{ menuItem }] }
