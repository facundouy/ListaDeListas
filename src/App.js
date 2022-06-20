import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NewItem from "./components/NewItem";
import ShoppingList from "./components/ShoppingList";
import HackList from "./components/HackList";
import NewList from "./components/NewList";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HackList />
              <NewList />
            </>
          }
        />
        <Route
          path="list/:id"
          element={
            <>
              <NewItem />
              <ShoppingList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
