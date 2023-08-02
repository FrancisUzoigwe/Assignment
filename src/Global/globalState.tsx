import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
};

const Globalstate = createSlice({
  name: "global",
  initialState,
  reducers: {
    signInUser: (state: any, { payload }: any) => {
      state.user = payload;
    },
    logout: (state: any) => {
      state.user = null;
    },
  },
});

export const { signInUser, logout } = Globalstate.actions;

export default Globalstate.reducer;
