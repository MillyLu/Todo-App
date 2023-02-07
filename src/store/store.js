import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo";
// import visibilityFilter from "./reducers/visibilityFilter";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
