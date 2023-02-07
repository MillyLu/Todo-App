import React, {useState } from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../store/actions/creators/todo";
import {

  TOGGLE_TODO,

} from "../../store/actions/types/todo";
import { Todo } from "../todoshka";
import styles from "./index.module.css";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.byIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoItem: (id) => dispatch(toggleTodo(id)),
    deleteTodoItem: (id) => dispatch(deleteTodo(id)),
    completeTodo: (id) => dispatch(TOGGLE_TODO(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  console.log(props.todos);
  console.log(Object.keys(props.todos).length);

  return (
    <div className="displaytodos">
      <div className={styles.buttons}>
        <button className={styles.filterButton} onClick={() => setSort("active")}>Active</button>
        <button className={styles.filterButton}  onClick={() => setSort("completed")}>Completed</button>
        <button className={styles.filterButton}  onClick={() => setSort("all")}>All</button>
      </div>
      <ul className={styles.todolist}>
        <>
          {Object.keys(props.todos).length > 0 && sort === "active"
            ? Object.values(props.todos).map((todo) => {
                return (
                  !todo.completed && (
                    <Todo
                      key={todo.id}
                      item={todo}
                      toggleTodoItem={props.toggleTodoItem}
                      deleteTodoItem={props.deleteTodoItem}
                      // completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {Object.keys(props.todos).length > 0 && sort === "completed"
            ? Object.values(props.todos).map((todo) => {
                return (
                  todo.completed === true && (
                    <Todo
                      key={todo.id}
                      item={todo}
                      toggleTodoItem={props.toggleTodoItem}
                      deleteTodoItem={props.deleteTodoItem}
                      // completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {Object.keys(props.todos).length > 0 && sort === "all"
            ? Object.values(props.todos).map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    item={todo}
                    toggleTodoItem={props.toggleTodoItem}
                    deleteTodoItem={props.deleteTodoItem}
                    //   completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
        </>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
