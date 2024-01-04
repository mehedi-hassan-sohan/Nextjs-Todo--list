'use client'
import { useContext } from "react";
import cancelImage from "../../../public/assets/images/cancel.png";
import { TodoContext } from "../Context/TodoContext";
import Image from "next/image";


export default function Todo({ task }) {
  const { tasks, setTasks } = useContext(TodoContext);

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-[#3d3350] hover:transition-all space-x-4 rounded-md border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          tasks.completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={tasks.completed}
          onChange={() => handleCompleteTask(tasks.id)}
          className="opacity-0  absolute rounded-full cursor-pointer"
        />
        {tasks.completed && (
          <svg
            className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div
        className={`select-none text-gray-300 flex-1 ${
          tasks.completed && "line-through"
        }`}
      >
        {tasks?.name}
      </div>

      <Image
        title="remove this todo"
        onClick={() => handleDelete(task.id)}
        src={cancelImage}
        className="flex-shrink-0 w-6 h-6 ml-2 cursor-pointer delete-image"
        alt="Cancel"
      />
    </div>
  );
}
