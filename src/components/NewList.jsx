import { useState } from "react";
import { addList } from "../redux/ListsSlice";
import { useDispatch, useSelector } from "react-redux";

function NewList() {
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addList(listName));
    setListName("");
  };
  console.log(listName);
  return (
    <>
      <form action="" onSubmit={handleClick}>
        <h1>Nueva lista</h1>
        <input
          type="text"
          value={listName}
          onChange={(event) => setListName(event.target.value)}
        />
        <button type="submit">Crear</button>
      </form>
    </>
  );
}

export default NewList;
