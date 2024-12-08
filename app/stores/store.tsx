import { create } from "zustand";

interface Todo {
  id: string;
  date: string;
  title: string;
  description: string;
  status: boolean;
}

interface TodoStore {
  allTodos: Todo[] | null;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  updateTodo: (newTodo: Todo) => void;
  updateStatus: (id: string) => void;
  currModal: string;
  toggleModal: (modal: string) => void;
  currDate: string;
  setCurrDate: (date: string) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  allTodos:
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("todos") || "[]"),
  currModal: "none",
  currDate: new Date().toDateString(),
  addTodo: (todo) =>
    set((state) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(state.allTodos ? [...state.allTodos, todo] : [])
      );
      return { allTodos: state.allTodos ? [...state.allTodos, todo] : [] };
    }),
  removeTodo: (id) =>
    set((state) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(state.allTodos?.filter((todo) => todo.id !== id))
      );
      return { allTodos: state.allTodos?.filter((todo) => todo.id !== id) };
    }),
  updateTodo: (newTodo) =>
    set((state) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          state.allTodos?.map((todo) =>
            todo.id === newTodo.id ? newTodo : todo
          )
        )
      );
      return {
        allTodos: state.allTodos?.map((todo) =>
          todo.id === newTodo.id ? newTodo : todo
        ),
      };
    }),
  updateStatus: (id) =>
    set((state) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          state.allTodos?.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
          )
        )
      );
      return {
        allTodos: state.allTodos?.map((todo) =>
          todo.id === id ? { ...todo, status: !todo.status } : todo
        ),
      };
    }),
  toggleModal: (modal) =>
    set({
      currModal: modal,
    }),
  setCurrDate: (date) =>
    set({
      currDate: date,
    }),
}));

export default useTodoStore;
