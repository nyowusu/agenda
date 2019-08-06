import { createAction } from "redux-actions";

export const addTodo = createAction("ADD");
export const removeTodo = createAction("REMOVE");
export const toggleTodo = createAction("TOGGLE");
export const updateView = createAction("UPDATEVIEW");

export const myAsyncFetchUser = id => async dispatch => {
  try {
    const userResponse = await fetch(`https://api.github.com/users/${id}`);
    const user = await userResponse.json();
    // return user;
    dispatch(addTodo(user.name));
  } catch (error) {
    console.log(`Unable to fetch users: ${error}`);
  }
};
