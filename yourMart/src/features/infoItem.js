import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectedItem:null,
    typesofproduct:null
}

export const DetailsOfItem =createSlice({
    name:'info' ,
    initialState,
    reducers:{
        infoItem:(state,action)=>{
            state.selectedItem = action.payload;
        },
        Tyesofproduct:(state,action)=>{
            state.typesofproduct = action.payload;
         }
    }
})

export const {infoItem,Tyesofproduct} = DetailsOfItem.actions;
export default DetailsOfItem.reducer