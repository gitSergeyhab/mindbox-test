import { create } from "zustand";
import { ITodoStatus } from "../types";

interface TodoStatusState {
  activeStatus: ITodoStatus;
  setActiveStatus: (status: ITodoStatus) => void;
}

const useTodoStatusStore = create<TodoStatusState>((set) => ({
  activeStatus: "All",
  setActiveStatus: (status: ITodoStatus) => set({ activeStatus: status }),
}));

export default useTodoStatusStore;
