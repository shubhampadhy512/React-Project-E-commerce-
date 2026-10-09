import { configureStore } from "@reduxjs/toolkit";
import itemInfo from "../features/infoItem.js"
import cartItem from "../features/yourCart.js"
export const store = configureStore({
    reducer:{
       info: itemInfo,
       cart:cartItem
    }
});