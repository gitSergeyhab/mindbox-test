import { ITodoItem, ITodoStatus } from "./types";

export const getNewTodoId = (todos: ITodoItem[]) => {
  return todos.length ? todos[todos.length - 1].id + 1 : 1;
};

export const filterItems = (todos: ITodoItem[], status: ITodoStatus) => {
  switch (status) {
    case "Active":
      return todos.filter((todo) => !todo.completed);
    case "Completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
