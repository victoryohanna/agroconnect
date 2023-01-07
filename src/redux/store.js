import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";
import productsSlice from "./slice/products-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    productsSlice: productsSlice.reducer
  },
});
export default store; 
