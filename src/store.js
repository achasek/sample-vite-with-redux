import { configureStore } from "@reduxjs/toolkit";

import noteReducer from "./reducers/noteReducer/noteReducer.js";
import filterReducer from "./reducers/filterReducer/filterReducer.js";
import searchBarReducer from "./reducers/searchBarReducer/searchBarReducer.js";
import notificationReducer from "./reducers/notificationReducer/notificationReducer.js";
import paginationReducer from "./reducers/paginationReducer/paginationReducer.js";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
    search: searchBarReducer,
    notification: notificationReducer,
    pagination: paginationReducer,
  },
});

console.log(store.getState(), "state in store.js");

export default store;
