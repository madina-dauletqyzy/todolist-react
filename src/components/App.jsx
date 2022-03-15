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
  function handleTrashClick(id) {
    console.log("check delete");
    setItemsArray((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {itemsArray.map((item, index) => (
            <ToDoItem
              itemName={item}
              onChecked={handleTrashClick}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
