import React, { useState } from "react";
import "../../public/styles.css";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
function App() {
  const [itemsArray, setItemsArray] = useState([]);

  function handleSubmit(item) {
    setItemsArray((prevItems) => {
      return [...prevItems, item];
    });
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
      <InputArea onAdd={handleSubmit} />
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
