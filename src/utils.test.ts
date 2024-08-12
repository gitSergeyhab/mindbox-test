import { getNewTodoId, filterItems } from "./utils";
import { ITodoItem } from "./types";

describe("getNewTodoId", () => {
  it("should return 1 if there are no todos", () => {
    const todos: ITodoItem[] = [];
    const newId = getNewTodoId(todos);
    expect(newId).toBe(1);
  });

  it("should return the next id if there are todos", () => {
    const todos: ITodoItem[] = [
      { id: 1, text: "Test Todo 1", completed: false },
      { id: 2, text: "Test Todo 2", completed: true },
    ];
    const newId = getNewTodoId(todos);
    expect(newId).toBe(3);
  });
});

describe("filterItems", () => {
  const todos: ITodoItem[] = [
    { id: 1, text: "Test Todo 1", completed: false },
    { id: 2, text: "Test Todo 2", completed: true },
    { id: 3, text: "Test Todo 3", completed: false },
  ];

  it("should return all items if status is All", () => {
    const filteredTodos = filterItems(todos, "All");
    expect(filteredTodos).toEqual(todos);
  });

  it("should return only active items", () => {
    const filteredTodos = filterItems(todos, "Active");
    expect(filteredTodos).toEqual([
      { id: 1, text: "Test Todo 1", completed: false },
      { id: 3, text: "Test Todo 3", completed: false },
    ]);
  });

  it("should return only completed items", () => {
    const filteredTodos = filterItems(todos, "Completed");
    expect(filteredTodos).toEqual([
      { id: 2, text: "Test Todo 2", completed: true },
    ]);
  });
});
