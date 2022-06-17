import { useSelector, useDispatch } from "react-redux";
import {
  buyItemCreator,
  deleteItemCreator,
} from "../redux/shoppingListActions";

function ShoppingList({ onClick }) {
  const shoppingList = useSelector((state) => state.shoppingList);
  console.log(shoppingList);

  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(deleteItemCreator(item));
  };

  const handleClick = (itemId) => {
    dispatch(buyItemCreator(itemId));
  };

  return (
    <div>
      <ul onClick={onClick}>
        {shoppingList.map((item) => {
          return (
            <li
              key={item.id}
              className={
                item.isBought
                  ? `text-decoration-line-through list-unstyled m-3`
                  : "list-unstyled m-3"
              }
            >
              <input type="checkbox" onClick={() => handleClick(item.id)} />{" "}
              {item.name}{" "}
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  deleteItem(item);
                }}
              >
                Eliminar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
