import { createSlice } from '@reduxjs/toolkit';
const instate = { authenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: instate,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

// Destructure and export the plain action creators
export const authActions = authSlice.actions;
export default authSlice.reducer;
