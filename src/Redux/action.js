import { createAction } from "@reduxjs/toolkit";

export const addOrder = createAction("addOrder");
export const cancelOrder = createAction("cancelOrder");
export const createCode = createAction("createCode");

// addOrder(1) // {type: "addOderder", payload: 1}
