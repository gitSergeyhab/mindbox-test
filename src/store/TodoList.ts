import { create } from "zustand";
import { ITodoItem } from "../types";
import { getNewTodoId } from "../utils";

const initialList: ITodoItem[] = [
  { text: "Тестовое задание", completed: false, id: 1 },
  { text: "Прекрасный код", completed: true, id: 2 },
  { text: "Покрытие тестами", completed: false, id: 3 },
];

interface TodoListState {
  todoItems: ITodoItem[];
  addTodo: (todoText: string) => void;
  setCompleted: (id: number) => void;
  clearCompleted: () => void;
}

const useTodoListStore = create<TodoListState>((set) => ({
  todoItems: initialList,
  addTodo: (todoText) =>
    set((state) => ({
      todoItems: [
        ...state.todoItems,
        { text: todoText, id: getNewTodoId(state.todoItems), completed: false },
      ],
    })),
  clearCompleted: () =>
    set((state) => ({
      todoItems: state.todoItems.filter((todo) => !todo.completed),
    })),
  setCompleted: (id) =>
    set((state) => ({
      todoItems: state.todoItems.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default useTodoListStore;
