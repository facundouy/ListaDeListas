import { v4 as uuidv4 } from "uuid";

export function addItemCreator(newItemName) {
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuidv4(),
      name: newItemName,
      isBought: false,
    },
  };
}

export function deleteItemCreator(item) {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
}

export function buyItemCreator(itemId) {
  return {
    type: "BUY_ITEM",
    payload: itemId,
  };
}
