import { create } from "zustand";
import { v4 as uuid } from "uuid";

const useProjectStore = create((set) => ({
  projects: [],
  draggedTask: null,
  addProject: (title, description) =>
    set((state) => ({
      projects: [
        ...state.projects,
        { id: uuid(), title, description, tasks: [] },
      ],
    })),
  editProject: (id, newTitle, newDescription) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id
          ? { ...project, title: newTitle, description: newDescription }
          : project
      ),
    })),
  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id != id),
    })),
}));

export default useProjectStore;
