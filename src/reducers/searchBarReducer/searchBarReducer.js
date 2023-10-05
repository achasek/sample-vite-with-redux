import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchBar(state, action) {
      state = action.payload;
      console.log(JSON.parse(JSON.stringify(state)));
      return state;
    },
  },
});

export const { setSearchBar } = searchBarSlice.actions;

export default searchBarSlice.reducer;
