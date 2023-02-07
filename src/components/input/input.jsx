import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/creators/todo";
import styles from "./index.module.css";

/*const mapStateToProps = (state) => {
  return {
    todo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
  };
};

*/

export const ToDoInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <div className={styles.addInput}>
      <input
        className={styles.input}
        type={"text"}
        value={value}
        onChange={onInputChange}
      />
      <button className={styles.button} onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
};

//export default connect(mapStateToProps, mapDispatchToProps)(ToDoInput);
