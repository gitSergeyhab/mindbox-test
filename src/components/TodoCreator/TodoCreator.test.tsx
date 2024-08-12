import { fireEvent, render, screen } from "@testing-library/react";
import { TodoCreator } from "./TodoCreator";
import useTodoListStore from "../../store/TodoList";

jest.mock("../../store/TodoList.ts");

describe("TodoCreator", () => {
  const addTodoMock = jest.fn();
  beforeEach(() => {
    (
      useTodoListStore as jest.MockedFunction<typeof useTodoListStore>
    ).mockReturnValue({
      addTodo: addTodoMock,
    });
  });
  const renderComponent = () => render(<TodoCreator />);

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render TodoCreator with input and icon", () => {
    renderComponent();
    expect(screen.getByTestId("todo-creator")).toBeInTheDocument();
    expect(screen.getByTestId("todo-creator-input")).toBeInTheDocument();
    expect(screen.getByTestId("todo-creator-icon")).toBeInTheDocument();
  });

  it("should type value and call addTodo with correct value when Enter key is pressed", () => {
    renderComponent();
    const value = "Сделать тест для добавления todo";
    const inputElement = screen.getByTestId("todo-creator-input");

    fireEvent.change(inputElement, { target: { value } });
    expect(inputElement).toHaveValue(value);

    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(addTodoMock).toHaveBeenCalledWith(value);
    expect(inputElement).toHaveValue("");
  });
});
