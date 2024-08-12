import { FC } from "react";
import { TodoStatusTab } from "./TodoStatusTab";
import useTodoListStore from "../../store/TodoList";
import { statuses } from "./const";
import "./TodoControls.css";

export const TodoControls: FC = () => {
  const { todoItems, clearCompleted } = useTodoListStore();

  return (
    <div className="todo-controls">
      <span data-testid="todo-count" className="todo-count">
        {todoItems.length} items left
      </span>
      <div className="todo-status-tabs">
        {statuses.map((status) => (
          <TodoStatusTab key={status} status={status} />
        ))}
      </div>
      <button
        className="todo__control"
        data-testid="todo-clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
};
