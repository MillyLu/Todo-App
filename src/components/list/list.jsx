import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/selector";
import { Todo } from "../todoshka/index";
import styles from './index.module.css';


export const TodoList = () => {
  const todos = useSelector(todosSelector);

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};