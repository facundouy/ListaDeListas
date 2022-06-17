import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import shoppingListReducer from "./shoppingListReducer";
import ListReducer from "./ListSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    shoppingList: shoppingListReducer,
    List: ListReducer,
  },
});

export default store;
