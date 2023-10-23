import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "english",
};

export const LanguageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLang } = LanguageSlice.actions;

export default LanguageSlice.reducer;
