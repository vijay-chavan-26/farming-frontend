import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;
