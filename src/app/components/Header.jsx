'use client'
import toast, { Toaster } from "react-hot-toast";
import tickImage from "../../../public/assets/images/double-tick.png";
import noteImage from "../../../public/assets/images/notes.png";
import { FaCirclePlus } from "react-icons/fa6";
import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import Image from "next/image";
export default function Header() {
  const [input, setInput] = useState("");
  const { tasks, setTasks } = useContext(TodoContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Please enter a todo");
    }
     else {
      const newTask = { id: Date.now(), name: input, completed: false };
      setTasks([...tasks, newTask]);
      setInput("");

      toast.success("Todo added successfully");
    }
  };

  const clearHandler = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
    setInput(""); // Reset the input to an empty string
  };
  
  const completeHandler = () => {
    const newTasks = tasks.map((task) => ({ ...task, completed: true }));
    setTasks(newTasks);
  };

  return (
    <div>
      <form
        className="flex items-center  px-4 py-4 rounded-md"
        style={{ background: "rgba(255, 255, 255, 0.1)" }}
        onSubmit={handleSubmit}
      >
        <Image src={noteImage} className="w-6 h-6 image-style" alt="Add todo" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-transparent text-gray-200"
        />

        <button
          type="submit"
            className="w-btn w-btn-primary"
        ><FaCirclePlus className="text-2xl" />
        </button>


      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-300">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <Image className="w-4 h-4 image-style" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
      <Toaster />
    </div>
  );
}
