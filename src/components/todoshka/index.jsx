import React from "react";
import { connect } from "react-redux";
import styles from "./index.module.css";

export const Todo = (props) => {
  const { item, toggleTodoItem, deleteTodoItem } = props;
  /*const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  };

  const deleteTodoItem = () => {
    console.log(todo.id);
    dispatch(deleteTodo(todo.id));
  };*/
  console.log("!!!");
  console.log(props.item);

  return (
    <li
      key={item.id}
      className={
        item.completed
          ? `${styles.item} + ${styles.completed}`
          : `${styles.item}`
      }
      onClick={() => toggleTodoItem(item.id)}
      value={item.content}
    >
      {item.completed ? "👌" : "👋"}{" "}
      <span className={styles.value}>{item.content}</span>
      <button className={styles.button}onClick={() => deleteTodoItem(item.id)}>❌</button>
    </li>
  );
};

const mapStateToProps = (store) => {
  console.log(store);
  return {
    todo: store.todo.byIds,
  };
};

export default connect(mapStateToProps)(Todo);
