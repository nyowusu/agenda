import React, { createRef, useState, useEffect } from "react";
// import { myAsync } from "./actions";
import "./App.css";

function App({
  todoList,
  addTodo,
  removeTodo,
  toggleTodo,
  currentView,
  updateView
}) {
  const todoInput = createRef();
  const gitUserNameRef = createRef();

  // const getUser = async () => {
  //   const usrs = await myAsync("nyowusu");
  //   console.log(usrs);
  // };
  // getUser();

  const [filteredList, setFilteredList] = useState(todoList);
  // const addAction = { type: "ADD" };
  // const removeAction = { type: "REMOVE" };
  // const toggleAction = { type: "TOGGLE" };

  useEffect(() => {
    setFilteredList(todoList);
  }, [todoList]);

  const handleAddItem = e => {
    todoInput.current.value !== "" && addTodo(todoInput.current.value);
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
    <div className="App">
      <div className="todo-container">
        <div className="todo-text">
          <span>DAY - TODOS: </span>
        </div>
        <div className="todo-input">
          <input type="text" ref={todoInput} placeholder={"ENTER A TODO"} />
          <button onClick={handleAddItem}>Add Todo</button>
        </div>

        <div className="todo-selectors">
          <button
            onClick={() => {
              updateView("All");
              setFilteredList(todoList);
            }}
          >
            <span>All Todos</span>
          </button>
          <button
            className="completed"
            onClick={() => {
              updateView("Completed");
              setFilteredList(
                todoList.filter(listItem => listItem.completed === true)
              );
            }}
          >
            <span>Completed</span>
          </button>
          <button
            onClick={() => {
              updateView("Pending");
              setFilteredList(
                todoList.filter(listItem => listItem.completed === false)
              );
            }}
          >
            <span>Pending</span>
          </button>
        </div>
        <div className="todo-status">
          Currently showing: <span>{currentView}</span>
        </div>
        <div className="todo-list">
          {filteredList.map(({ todo, completed }, idx) => (
            <li className="list-item" key={idx}>
              <span
                onClick={() => handleToggle(idx)}
                className={completed ? "linethrough" : "lineoff"}
              >
                {todo}
              </span>
              <button onClick={() => handleRemoveItem(idx)}>Remove</button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
