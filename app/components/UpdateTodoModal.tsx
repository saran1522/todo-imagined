"use client";
import React, { useState } from "react";
import useTodoStore from "../stores/store";
import TodoData from "../interface/TodoInterface";

function UpdateTodoModal({ todo }: { todo: TodoData }) {
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string>(todo.description);
  const { toggleModal, updateTodo } = useTodoStore();
  const handleUpdateTodo = () => {
    if (!title || !description) {
      alert("Please Write title and description");
      return;
    }
    const updatedTodo = {
      ...todo,
      title: title,
      description: description,
    };
    updateTodo(updatedTodo);
    toggleModal("none");
  };
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-[#dce0e4c9] flex justify-center items-center">
      <div className="rounded-2xl bg-slate-50 p-4 flex flex-col gap-2 w-4/5 lg:w-1/2">
        <h1 className="text-xl font-semibold">Update To-Do</h1>
        <input
          type="text"
          name="title"
          className="rounded-xl p-4 focus:outline-none bg-slate-100"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="description"
          className="rounded-xl p-4 resize-none focus:outline-none bg-slate-100"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="p-1 flex gap-2">
          <button
            className="px-3 py-2 rounded-xl text-sm bg-green-400"
            onClick={handleUpdateTodo}
          >
            Update
          </button>
          <button
            className="px-3 py-2 rounded-xl text-sm bg-red-500"
            onClick={() => toggleModal("none")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateTodoModal;
