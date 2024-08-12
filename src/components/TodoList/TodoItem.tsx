import { FC } from "react";
import { ITodoItem } from "../../types";
import { CheckIcon } from "../CheckIcon";
import useTodoListStore from "../../store/TodoList";

export interface TodoItemProps {
  todo: ITodoItem;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { setCompleted } = useTodoListStore();
  const { completed, text, id } = todo;
  const handleToggleCompleted = () => setCompleted(id);

  return (
    <li className="todo__item" data-testid="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleCompleted}
          className="todo-input"
          data-testid="todo-checkbox"
        />
        <span className="todo-icon">
          {completed && <CheckIcon data-testid="todo-icon" />}
        </span>
        <span className="todo-text">{text}</span>
      </label>
    </li>
  );
};
