import { createSlice } from '@reduxjs/toolkit';
const instate = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: instate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
  },
});

// Destructure and export the plain action creators
export const actions = counterSlice.actions;
export default counterSlice.reducer;
