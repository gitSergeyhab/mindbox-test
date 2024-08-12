import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";
import useTodoListStore from "../../store/TodoList";
import { mockedItems } from "../../__mocks__/todoItems";
import useTodoStatusStore from "../../store/TodoStatus";
import { ITodoStatus } from "../../types";

jest.mock("../../store/TodoList.ts");
jest.mock("../../store/TodoStatus.ts");

type MockedStore = jest.MockedFunction<typeof useTodoStatusStore>;

describe("TodoList", () => {
  const renderComponent = () => render(<TodoList />);

  const mockUseTodoStatusStore = (activeStatus: ITodoStatus) => {
    (useTodoStatusStore as MockedStore).mockReturnValue({
      activeStatus,
    });
  };

  beforeEach(() => {
    (
      useTodoListStore as jest.MockedFunction<typeof useTodoListStore>
    ).mockReturnValue({ todoItems: mockedItems });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the TodoList component and all todo items when activeStatus is 'All'", () => {
    mockUseTodoStatusStore("All");
    renderComponent();
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    const items = screen.getAllByTestId("todo-item");
    expect(items).toHaveLength(mockedItems.length);
  });

  it("should render the TodoList component and Active todo items when activeStatus is 'Active'", () => {
    mockUseTodoStatusStore("Active");
    renderComponent();
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    const items = screen.getAllByTestId("todo-item");
    expect(items).toHaveLength(
      mockedItems.filter((item) => !item.completed).length
    );
  });

  it("should render the TodoList component and Completed todo items when activeStatus is 'Completed'", () => {
    mockUseTodoStatusStore("Completed");
    renderComponent();
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    const items = screen.getAllByTestId("todo-item");
    expect(items).toHaveLength(
      mockedItems.filter((item) => item.completed).length
    );
  });
});
