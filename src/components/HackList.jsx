import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HackList() {
  const lists = useSelector((state) => state.Lists);

  console.log(lists);
  return (
    <>
      <h1>HackList</h1>
      <ul className="list-unstyled">
        {lists.map((item) => {
          return (
            <Link key={item.id} to={`/list/${item.id}`}>
              <li>{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default HackList;
