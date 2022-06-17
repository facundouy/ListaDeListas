import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const ListSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addList(state, action) {
      state.push({ id: "", name: "", createdAt: "", color: "", items: [] });
    },
    removeList(state) {},
  },
});

export const { addList, removeList } = ListSlice.actions;
export default ListSlice.reducer;
