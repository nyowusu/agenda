import { connect } from "react-redux";
import App from "../App";

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
  addTodo: todo => dispatch({ type: "ADD", item: todo }),
  removeTodo: index => dispatch({ type: "REMOVE", index }),
  toggleTodo: index => dispatch({ type: "TOGGLE", index }),
  currentViewFn: currentView => dispatch({ type: "UPDATEVIEW", currentView })
});

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(App);
