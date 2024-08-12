import { render, screen, fireEvent } from "@testing-library/react";
import useTodoListStore from "../../store/TodoList";
import { TodoControls } from "./TodoControls";
import { statuses } from "./const";
import { mockedItems } from "../../__mocks__/todoItems";

jest.mock("../../store/TodoList.ts");

describe("TodoControls", () => {
  const clearCompletedMock = jest.fn();

  beforeEach(() => {
    (
      useTodoListStore as jest.MockedFunction<typeof useTodoListStore>
    ).mockReturnValue({
      todoItems: mockedItems,
      clearCompleted: clearCompletedMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => render(<TodoControls />);

  it("should render the correct number of todo items", () => {
    renderComponent();

    const numberOfItems = screen.getByTestId("todo-count");

    expect(numberOfItems).toHaveTextContent(
      `${mockedItems.filter((todo) => !todo.completed).length} items left`
    );
  });

  it("should render tabs", () => {
    renderComponent();

    const tabs = screen.getAllByTestId("todo-status-tab");

    expect(tabs).toHaveLength(statuses.length);
  });

  it("calls clearCompleted when clicked", () => {
    renderComponent();

    const button = screen.getByTestId("todo-clear-completed");
    expect(clearCompletedMock).toHaveBeenCalledTimes(0);

    fireEvent.click(button);
    expect(clearCompletedMock).toHaveBeenCalledTimes(1);
  });
});
