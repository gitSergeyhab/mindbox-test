import { FC } from "react";
import { ITodoStatus } from "../../types";
import { TodoStatusTab } from "./TodoStatusTab";
import useTodoListStore from "../../store/TodoList";
import "./TodoControls.css";

const statuses: ITodoStatus[] = ["All", "Active", "Completed"] as const;

export const TodoControls: FC = () => {
  const { todoItems, clearCompleted } = useTodoListStore();

  return (
    <div className="todo-controls">
      <span className="todo-count">{todoItems.length} items left</span>
      <div className="todo-status-tabs">
        {statuses.map((status) => (
          <TodoStatusTab key={status} status={status} />
        ))}
      </div>
      <button className="todo__control" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
