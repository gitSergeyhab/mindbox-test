import { FC, useRef } from "react";
import { ChevronIcon } from "../ChevronIcon";
import useTodoListStore from "../../store/TodoList";

import "./TodoCreator.css";

export const TodoCreator: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodoListStore();

  const handleEnterInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = inputRef.current?.value;
    if (e.key === "Enter" && text?.trim()) {
      addTodo(text);
      inputRef.current!.value = "";
    }
  };
  return (
    <div
      className="todo-creator"
      title="для добавления введите и нажмите ENTER"
      data-testid="todo-creator"
    >
      <input
        data-testid="todo-creator-input"
        type="text"
        className="todo-creator__input"
        onKeyDown={handleEnterInput}
        ref={inputRef}
        placeholder="What needs to be done?"
      />
      <ChevronIcon
        className="todo-creator__icon"
        data-testid="todo-creator-icon"
        width={32}
      />
    </div>
  );
};
