import { Link } from "react-router-dom";

function HackList() {
  return (
    <>
      <h1>HackList</h1>
      <ul className="list-unstyled">
        <li>
          <Link to="frutas">Frutería</Link>
        </li>
        <li>
          <Link to="verduras">Verdulería</Link>
        </li>
        <li>
          <Link to="supermercado">Supermercado</Link>
        </li>
      </ul>
    </>
  );
}

export default HackList;
