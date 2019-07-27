import React, { createRef, useState } from "react";
import "./App.css";

function App({ todoList, addTodo, removeTodo, toggleTodo, currentView, currentViewFn }) {
  const todoInput = createRef();

  const [filteredList, setFilteredList] = useState(todoList);
  // const addAction = { type: "ADD" };
  // const removeAction = { type: "REMOVE" };
  // const toggleAction = { type: "TOGGLE" };

  const handleAddItem = e => {
    addTodo(todoInput.current.value);
    // dispatch(addAction);
    todoInput.current.value = "";
  };

  const handleRemoveItem = index => {
    removeTodo(index);
    // dispatch(removeAction);
  };

  const handleToggle = index => {
    toggleTodo(index);
    // dispatch(toggleAction);
  };

  return (
    <div>
      <div>
        Currently showing: <span>{currentView}</span>
      </div>
      <div>
        <input type="text" ref={todoInput} />
        <button onClick={handleAddItem}>Add Todo</button>
      </div>
      <div>
        <ul>
          {filteredList.map(({ todo, completed }, idx) => (
            <li className="list-item" key={idx}>
              <span onClick={() => handleToggle(idx)} className={completed ? "linethrough" : ""}>
                {todo}
              </span>
              <button onClick={() => handleRemoveItem(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            currentViewFn("All");
            setFilteredList(todoList);
          }}
        >
          All Todos
        </button>
        <button
          onClick={() => {
            currentViewFn("Completed");
            setFilteredList(todoList.filter(listItem => listItem.completed === true));
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            currentViewFn("Pending");
            setFilteredList(todoList.filter(listItem => listItem.completed === false));
          }}
        >
          Pending
        </button>
      </div>
    </div>
  );
}

export default App;
