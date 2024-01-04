import { createContext, useState } from "react";

export const TodoContext = createContext();

const initialState = [
  { id: Date.now(), name: "I am a sample completed task", completed: true },
  { id: Date.now() + 1, name: "I am a sample pending task", completed: false },
];

console.log(initialState);
export default function TodoProvider({ children }) {
  const [tasks, setTasks] = useState(initialState);
  const [filter, setFilter] = useState("all");
  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
