import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { deleteItem } from "../redux/ListsSlice";

function ShoppingList({ onClick }) {
  const [itemId, setItemId] = useState("");
  console.log(itemId);
  const params = useParams();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.Lists);
  console.log(lists);

  const handleClick = (itemId, listId) => {
    dispatch(deleteItem(itemId, listId));
  };

  return (
    <div>
      <ul className="list-unstyled">
        {lists.map((list) => {
          if (list.id === params.id) {
            return (
              <div key={list.id}>
                {list.items.map((item) => {
                  return (
                    <>
                      <li
                        className={
                          item.isBought
                            ? `text-decoration-line-through list-unstyled m-3`
                            : "list-unstyled m-3"
                        }
                      >
                        <input type="checkbox"></input> {item.name}{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            setItemId(item.id);
                            handleClick(item.id, params.id);
                          }}
                        >
                          Eliminar
                        </button>
                      </li>
                    </>
                  );
                })}{" "}
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
