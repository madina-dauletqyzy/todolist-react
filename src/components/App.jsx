import React, { useState } from "react";
import "../../public/styles.css";
import ToDoItem from "./ToDoItem";
function App() {
  const [item, setItem] = useState("");
  const [itemsArray, setItemsArray] = useState([]);
  function handleChange(event) {
    setItem(event.target.value);
  }
  function handleSubmit() {
    setItemsArray((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button type="submit" onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArray.map((item) => (
            <ToDoItem itemName={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
