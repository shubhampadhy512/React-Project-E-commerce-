import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartitem: [],
    totalprice:0
}
export const cartItem = createSlice({
    name: "cartitem",
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.cartitem.push({
                newid: nanoid(),
                ...action.payload,
            });
            state.totalprice+=Math.round(Number(action.payload.totalPrice));
        },
        removeCart: (state, action) => {
            state.cartitem = state.cartitem.filter(item=>item.id!==action.payload);
        }
    }
})

export const {addTocart,removeCart}= cartItem.actions;
export default cartItem.reducer;