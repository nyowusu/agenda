import { connect } from "react-redux";
import App from "../App";
import { removeTodo, updateView, toggleTodo, myAsyncFetchUser, addTodo } from "../actions";

const mapStateToProps = state => {
  return { todoList: state.todos, currentView: state.currentView };
};

/**
 * using mapDispatchToProps as objections
 */
// const mapDistpatchToProps = {
//   addTodo: todo => ({ type: "ADD", item: todo }),
//   removeTodo: index => ({ type: "REMOVE", index }),
//   toggleTodo: index => ({ type: "TOGGLE", index })
// };

/**
 * as functions
 */
const mapDistpatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  // addTodo: id => dispatch(myAsyncFetchUser(id)),
  removeTodo: index => dispatch(removeTodo(index)),
  toggleTodo: index => dispatch(toggleTodo(index)),
  updateView: currentView => dispatch(updateView(currentView))
});

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(App);
