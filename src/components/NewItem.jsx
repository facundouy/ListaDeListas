import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemCreator } from "../redux/shoppingListActions";

function NewItem() {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const addItem = (event) => {
    event.preventDefault();
    dispatch(addItemCreator(newItem));
    setNewItem("");
  };

  return (
    <div>
      <form action="" className="form-control" onSubmit={addItem}>
        <div>
          <input
            type="text"
            value={newItem}
            placeholder="Ingresar un nuevo ítem"
            onChange={(event) => setNewItem(event.target.value)}
          ></input>
          <button className="btn btn-success" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewItem;
