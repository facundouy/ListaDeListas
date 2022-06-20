import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import shoppingListReducer from "./shoppingListReducer";
import ListsReducer from "./ListsSlice";

const store = configureStore({
  reducer: {
    Lists: ListsReducer,
  },
});

export default store;
