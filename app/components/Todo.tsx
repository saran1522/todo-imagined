import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import useTodoStore from "../stores/store";
import { FaCheck } from "react-icons/fa6";
import TodoData from "../interface/TodoInterface";

function Todo({
  todo,
  handleCurrTodo,
}: {
  todo: TodoData;
  handleCurrTodo: () => void;
}) {
  const { removeTodo, updateStatus } = useTodoStore();
  return (
    <div className="rounded-2xl flex gap-4 p-4 bg-white shadow-sm">
      <span
        className={`rounded-full h-6 w-6 mt-4 border border-gray-800 p-0.5 cursor-pointer flex justify-center items-center ${
          todo.status ? "bg-gray-800" : ""
        }`}
        onClick={() => updateStatus(todo.id)}
      >
        {todo.status && <FaCheck className="text-gray-50 p-0.5" />}
      </span>
      <div className={`flex-grow ${todo.status && "line-through opacity-45"}`}>
        <h4 className={`font-semibold text-xl`}>{todo?.title}</h4>
        <p>{todo?.description}</p>
      </div>
      <div className="h-fit mt-4 flex gap-3 text-3xl lg:gap-6">
        {!todo.status && (
          <CiEdit
            className="rounded-full p-1 hover:bg-slate-100 cursor-pointer"
            onClick={handleCurrTodo}
          />
        )}
        <AiOutlineDelete
          className="rounded-full p-1 hover:bg-slate-100 cursor-pointer"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
