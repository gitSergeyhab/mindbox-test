import { FC } from "react";
import clsx from "clsx";
import { ITodoStatus } from "../../types";
import useTodoStatusStore from "../../store/TodoStatus";

export interface TodoStatusTabProps {
  status: ITodoStatus;
}

export const TodoStatusTab: FC<TodoStatusTabProps> = ({ status }) => {
  const { activeStatus, setActiveStatus } = useTodoStatusStore();
  return (
    <button
      className={clsx(
        "todo__control",
        status === activeStatus && "todo__control--active"
      )}
      key={status}
      onClick={() => setActiveStatus(status)}
    >
      {status}
    </button>
  );
};
