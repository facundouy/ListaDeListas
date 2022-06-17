function shoppingListReducer(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter(function (item) {
        return item.id !== action.payload.id;
      });
    case "BUY_ITEM":
      return state.map(function (item) {
        if (item.id !== action.payload) {
          return item;
        }
        return {
          ...item,
          isBought: !item.isBought,
        };
      });
    default:
      return state;
  }
}

export default shoppingListReducer;
