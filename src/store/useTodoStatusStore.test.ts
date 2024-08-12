import { ITodoStatus } from "../types";
import useTodoStatusStore from "./TodoStatus";

describe("useTodoStatusStore", () => {
  it('should have the initial activeStatus as "All"', () => {
    const { activeStatus } = useTodoStatusStore.getState();
    expect(activeStatus).toBe("All");
  });

  it("should update the activeStatus when setActiveStatus is called", () => {
    const newStatus: ITodoStatus = "Active";
    const { setActiveStatus } = useTodoStatusStore.getState();

    setActiveStatus(newStatus);

    const { activeStatus } = useTodoStatusStore.getState();
    expect(activeStatus).toBe(newStatus);
  });
});
