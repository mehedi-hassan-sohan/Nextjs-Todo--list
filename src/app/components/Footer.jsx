'use client'

import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function Footer() {
  const { tasks, filter, setFilter } = useContext(TodoContext);

  const handleFilterTasks = (filter) => {
    setFilter(filter);
  };

  const numberOfTasks = (noOfTasks) => {
    switch (noOfTasks) {
      case 0:
        return "No task";
      case 1:
        return "1 task";

      default:
        return `${noOfTasks} Task`;
    }
  };

  const taskRemaining = tasks?.filter((task) => !task.completed).length;

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-300">
      <p>{numberOfTasks(taskRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleFilterTasks("all")}
          className={`cursor-pointer ${filter === "all" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleFilterTasks("pending")}
          className={`cursor-pointer ${filter === "pending" && "font-bold"}`}
        >
          Pending
        </li>
        <li>|</li>
        <li
          onClick={() => handleFilterTasks("completed")}
          className={`cursor-pointer ${filter === "completed" && "font-bold"}`}
        >
          Complete
        </li>
      </ul>
    </div>
  );
}
