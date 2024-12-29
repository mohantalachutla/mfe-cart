import { createSlice } from '@reduxjs/toolkit';
// import { Buffer } from 'buffer';

const initialState = {
  items: [],
  archivedItems: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    cartSuccess: (state, { payload = initialState }) => payload,
    cartFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
  },
});

export default cartSlice.reducer;
export const { cartSuccess, cartFailure } = cartSlice.actions;
