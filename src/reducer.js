const defaultState = {
  todos: [
    { todo: "Learn JavaScript", completed: false },
    { todo: "Learn React", completed: false },
    { todo: "Leave Teaching", completed: false },
    { todo: "go to Africa", completed: false }
  ],
  currentView: "All"
};

export function todosReducer(state = defaultState.todos, action) {
  const todos = state;

  switch (action.type) {
    case "ADD":
      return [...todos, { todo: action.item, completed: false }];

    case "REMOVE":
      return [...todos.slice(0, action.index), ...todos.slice(action.index + 1)];

    case "TOGGLE":
      console.log(action);
      let currentTodo = todos[action.index];
      currentTodo.completed = !currentTodo.completed;
      return [...todos.slice(0, action.index), { ...currentTodo }, ...todos.slice(action.index + 1)];

    default:
      return state;
  }
}

export function currentViewReducer(state = defaultState.currentView, action) {
  switch (action.type) {
    case "UPDATEVIEW":
      return action.currentView;
    default:
      return state;
  }
}
