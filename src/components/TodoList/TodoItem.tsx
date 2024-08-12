import { FC } from "react";
import { ITodoItem } from "../../types";
import { CheckIcon } from "../CheckIcon";
import useTodoListStore from "../../store/TodoList";

export interface TodoItemProps {
  todo: ITodoItem;
  checked: boolean;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, checked }) => {
  const { setCompleted } = useTodoListStore();
  const handleCheckboxChange = () => {
    setCompleted(todo.id);
  };

  return (
    <li className="todo__item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="todo-input"
        />
        <span className="todo-icon">{checked && <CheckIcon />}</span>
        <span className="todo-text">{todo.text}</span>
      </label>
    </li>
  );
};
