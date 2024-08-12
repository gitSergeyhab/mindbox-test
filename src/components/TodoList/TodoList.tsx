import { FC } from "react";
import useTodoListStore from "../../store/TodoList";
import useTodoStatusStore from "../../store/TodoStatus";
import { filterItems } from "../../utils";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList: FC = () => {
  const { todoItems } = useTodoListStore();
  const { activeStatus } = useTodoStatusStore();

  const filteredItems = filterItems(todoItems, activeStatus);

  return (
    <ul className="todo__list" data-testid="todo-list">
      {filteredItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
