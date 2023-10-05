import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "ALL",
  reducers: {
    setFilter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

// old way
// const filterReducer = (state = 'ALL', action) => {
//     switch (action.type) {
//       case 'SET_FILTER':
//         return action.payload
//       default:
//         return state
//     }
// };

// export const filterAction = (filter) => {
//     return {
//       type: 'SET_FILTER',
//       payload: filter,
//     }
// }

// export default filterReducer;

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
