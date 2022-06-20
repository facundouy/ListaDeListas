import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const ListsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList(state, action) {
      state.push({
        id: uuidv4(),
        name: action.payload,
        createdAt: new Date(),
        // color: "",
        items: [],
      });
    },
    deleteList() {},
    addItem(state, action) {
      state.map((list) => {
        if (list.id === action.payload.listId) {
          list.items.push({
            id: uuidv4(),
            name: action.payload.newItemName,
            isBought: false,
          });
        }
      });
    },
    deleteItem(state, action) {
      state.map((list) => {
        if (list.id === action.payload.listId) {
          console.log(action.payload.listId);
          return list.items.filter((item) => {
            return item.id !== action.payload.itemId;
          });
        }
      });
    },
  },
});

export const { addList, deleteList, addItem, deleteItem } = ListsSlice.actions;
export default ListsSlice.reducer;
