import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { ITodoItem } from "../../types";
import useTodoListStore from "../../store/TodoList";

jest.mock("../../store/TodoList.ts");

describe("TodoItem", () => {
  const setCompletedMock = jest.fn();
  const renderComponent = (todo: ITodoItem) => render(<TodoItem todo={todo} />);

  beforeEach(() => {
    (
      useTodoListStore as jest.MockedFunction<typeof useTodoListStore>
    ).mockReturnValue({
      setCompleted: setCompletedMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render TodoItem with CheckIcon when completed is true", () => {
    renderComponent({ completed: true, text: "Test Todo", id: 1 });
    const todo = screen.getByTestId("todo-item");
    expect(todo).toHaveTextContent("Test Todo");
    const checkIcon = screen.getByTestId("todo-icon");
    expect(checkIcon).toBeInTheDocument();
  });

  it("should render TodoItem without CheckIcon when completed is false", () => {
    renderComponent({ completed: false, text: "Test Todo", id: 1 });
    const todo = screen.getByTestId("todo-item");
    expect(todo).toHaveTextContent("Test Todo");
    const checkIcon = screen.queryByTestId("todo-icon");
    expect(checkIcon).not.toBeInTheDocument();
  });

  it("should render todo-checkbox and call setCompleted with the correct id when changed", () => {
    renderComponent({ completed: false, text: "Test Todo", id: 33 });
    const todoCheckbox = screen.getByTestId("todo-checkbox");

    expect(todoCheckbox).toBeInTheDocument();
    expect(setCompletedMock).toHaveBeenCalledTimes(0);
    fireEvent.click(todoCheckbox);
    expect(setCompletedMock).toHaveBeenLastCalledWith(33);
  });
});
