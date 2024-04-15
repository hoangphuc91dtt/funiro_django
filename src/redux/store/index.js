import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './../slice/cartSlice';
import productSlice from './../slice/productSlice';
import userSlice from './../slice/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    users: userSlice
  }
});
