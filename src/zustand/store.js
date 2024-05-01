import { create } from "zustand";
import { v4 as uuid } from "uuid";

const useTaskStore = create((set) => ({
  tasks: [],
  draggedTask: null,
  addTask: (title, description) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: uuid(), title, description, status: "TODO", memberName: "" },
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
  assignMemberToTask: (id, memberName) =>
    set((state) => ({
      tasks: state?.tasks?.map((t) => (t.id === id ? { ...t, memberName } : t)),
    })),
  editTask: (id, newTitle, newDescription) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task
      ),
    })),
}));

export default useTaskStore;
