export interface ITodoItem {
  text: string;
  completed: boolean;
  id: number;
}

export type ITodoStatus = "All" | "Active" | "Completed";
