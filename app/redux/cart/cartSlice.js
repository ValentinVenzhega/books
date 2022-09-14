import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    setItemCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setItemCart } = cartSlice.actions;
export default cartSlice.reducer;
