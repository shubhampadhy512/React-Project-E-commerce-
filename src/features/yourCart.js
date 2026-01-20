import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartitem: [],
}
export const cartItem = createSlice({
    name: "cartitem",
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.cartitem.push({
                id: nanoid(),
                ...action.payload
            });
        },
        removeCart: (state, action) => {
            state.cartitem = state.cartitem.filter(item=>item.id!==action.payload);
        }
    }
})

export const {addTocart,removeCart}= cartItem.actions;
export default cartItem.reducer;