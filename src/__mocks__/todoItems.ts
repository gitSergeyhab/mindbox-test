import { ITodoItem } from "../types";

export const mockedItems: ITodoItem[] = [
  { text: "Тестовое задание", completed: false, id: 1 },
  { text: "Прекрасный код", completed: true, id: 2 },
  { text: "Покрытие тестами", completed: false, id: 3 },
] as const;
