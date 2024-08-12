import { render, screen, fireEvent } from "@testing-library/react";
import { TodoStatusTab, TodoStatusTabProps } from "./TodoStatusTab";
import { ITodoStatus } from "../../types";
import useTodoStatusStore from "../../store/TodoStatus";

jest.mock("../../store/TodoStatus.ts");

type MockedStore = jest.MockedFunction<typeof useTodoStatusStore>;
describe("TodoStatusTab", () => {
  const setActiveStatusMock = jest.fn();

  const mockUseTodoStatusStore = (activeStatus: ITodoStatus) => {
    (useTodoStatusStore as MockedStore).mockReturnValue({
      activeStatus,
      setActiveStatus: setActiveStatusMock,
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (props: TodoStatusTabProps) =>
    render(<TodoStatusTab {...props} />);

  it("should render the button with the correct text", () => {
    mockUseTodoStatusStore("All");

    renderComponent({ status: "Active" });

    const button = screen.getByRole("button", { name: "Active" });
    expect(button).toBeInTheDocument();
  });

  it("should apply the active class when the status matches activeStatus", () => {
    mockUseTodoStatusStore("Active");

    renderComponent({ status: "Active" });

    const button = screen.getByRole("button", { name: "Active" });
    expect(button).toHaveClass("todo__control--active");
  });

  it("should not apply the active class when the status does not match activeStatus", () => {
    mockUseTodoStatusStore("All");

    renderComponent({ status: "Completed" });

    const button = screen.getByRole("button", { name: "Completed" });
    expect(button).not.toHaveClass("todo__control--active");
  });

  it("should call setActiveStatus with the correct status when clicked", () => {
    mockUseTodoStatusStore("All");

    renderComponent({ status: "Completed" });

    const button = screen.getByRole("button", { name: "Completed" });
    fireEvent.click(button);

    expect(setActiveStatusMock).toHaveBeenCalledWith("Completed");
  });
});
