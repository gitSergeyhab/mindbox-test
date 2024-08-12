import { FC } from "react";
import { ITodoStatus } from "../../types";
import useTodoStatusStore from "../../store/TodoStatus";

export interface TodoStatusTabProps {
  status: ITodoStatus;
}

export const TodoStatusTab: FC<TodoStatusTabProps> = ({ status }) => {
  const { activeStatus, setActiveStatus } = useTodoStatusStore();
  return (
    <button
      data-testid="todo-status-tab"
      className={
        status === activeStatus
          ? "todo__control todo__control--active"
          : "todo__control"
      }
      key={status}
      onClick={() => setActiveStatus(status)}
    >
      {status}
    </button>
  );
};
