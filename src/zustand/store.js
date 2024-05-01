import { create } from "zustand";
import { v4 as uuid } from "uuid";

const useTaskStore = create((set) => ({
  tasks: [],
  draggedTask: null,
  addTask: (title, description) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: uuid(), title, description, status: "TODO" },
      ],
    })),
  dragTask: (id) => set({ draggedTask: id }),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id != id),
    })),
  updateTask: (id, status) =>
    set((state) => ({
      tasks: state?.tasks.map((t) => (t.id === id ? { ...t, status } : t)),
    })),
}));

export default useTaskStore;
