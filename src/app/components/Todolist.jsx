import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import Todo from "./Todo";

export default function TodoList() {
  const { tasks, filter } = useContext(TodoContext);
  console.log("tasks", tasks);
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "completed":
        return task.completed;
      case "pending":
        return !task.completed;
      default:
        return true;
    }
  });

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {filteredTasks?.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  );
}
