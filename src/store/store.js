import { configureStore, createSlice } from "@reduxjs/toolkit";

export const favlist = createSlice({
  initialState: [],
  name: "AddFav",
  reducers: {
    updateFavlist: (state, action) => {
     state.push(action.payload);
    },
    ondelete:(state,action)=>{
       state.splice(action.payload,1);
    }
  },
});





export const store = configureStore({
  reducer: {
    AddFav: favlist.reducer,
  },
});