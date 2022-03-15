import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="listdiv" onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.itemName}
      </li>
      <i
        className="fa-solid fa-trash"
        onClick={() => {
          props.onChecked(props.id);
        }}
      ></i>
    </div>
  );
}
export default ToDoItem;
