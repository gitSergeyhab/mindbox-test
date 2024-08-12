import { ITodoItem } from "../types";
import useTodoListStore from "./TodoList";

export const initialTestList: ITodoItem[] = [
  { text: "Тестовое задание", completed: false, id: 1 },
];

describe("useTodoListStore", () => {
  beforeEach(() => {
    useTodoListStore.setState({
      todoItems: initialTestList,
    });
  });
  it("should have the initial TodoItems as initialList", () => {
    const { todoItems } = useTodoListStore.getState();
    expect(todoItems).toEqual(initialTestList);
  });

  it("should update the List when addTodo", () => {
    const newItem = "newItem";
    const { addTodo } = useTodoListStore.getState();

    addTodo(newItem);

    const { todoItems } = useTodoListStore.getState();
    expect(todoItems.length).toBe(2);
    expect(todoItems[todoItems.length - 1].text).toBe(newItem);
  });

  it("should update the Item.completed when setCompleted", () => {
    const { setCompleted } = useTodoListStore.getState();

    setCompleted(1);

    const { todoItems } = useTodoListStore.getState();
    expect(todoItems[0].completed).toBeTruthy();

    setCompleted(1);
    const { todoItems: newItems } = useTodoListStore.getState();
    expect(newItems[0].completed).toBeFalsy();
  });

  it("should remove completed items when clearCompleted", () => {
    const { clearCompleted, setCompleted, todoItems } =
      useTodoListStore.getState();

    clearCompleted();
    expect(todoItems.length).toBe(1);
    setCompleted(1);
    clearCompleted();
    const { todoItems: newItems } = useTodoListStore.getState();
    expect(newItems.length).toBe(0);
  });
});
