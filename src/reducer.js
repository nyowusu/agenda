import { handleActions, handleAction } from "redux-actions";
import { addTodo, removeTodo, toggleTodo, updateView } from "./actions";

export const todosReducer = handleActions(
  {
    [addTodo]: (state, { payload }) => [...state, { todo: payload, completed: false }],
    [removeTodo]: (state, { payload }) => [...state.slice(0, payload), ...state.slice(payload + 1)],
    [toggleTodo]: (state, { payload }) => {
      let currentTodo = state[payload];
      currentTodo.completed = !currentTodo.completed;
      return [...state.slice(0, payload), { ...currentTodo }, ...state.slice(payload + 1)];
    }
  },
  []
);
// export function todosReducer(state = [], action) {
//   switch (action.type) {
//     case "ADD":
//       console.log(action);
//       return [...state, { todo: action.item, completed: false }];

//     case "REMOVE":
//       return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

//     case "TOGGLE":
//       console.log(action);
//       let currentTodo = state[action.index];
//       currentTodo.completed = !currentTodo.completed;
//       return [...state.slice(0, action.index), { ...currentTodo }, ...state.slice(action.index + 1)];

//     default:
//       return state;
//   }
// }

export const currentViewReducer = handleAction(updateView, (state, { payload }) => payload, "All");
// export function currentViewReducer(state = "All", action) {
//   switch (action.type) {
//     case "UPDATEVIEW":
//       return action.currentView;
//     default:
//       return state;
//   }
// }
