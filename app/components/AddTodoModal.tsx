"use client";
import React, { useState } from "react";
import useTodoStore from "../stores/store";

function AddTodoModal() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { currDate, toggleModal, addTodo } = useTodoStore();
  const handleAddTodo = () => {
    if (!title || !description) {
      alert("Please Write title and description");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      date: currDate,
      title: title,
      description: description,
      status: false,
    };
    addTodo(newTodo);
    toggleModal("none");
  };
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-[#dce0e4c9] flex justify-center items-center">
      <div className="rounded-2xl bg-slate-50 p-4 flex flex-col gap-2 w-4/5 lg:w-1/2">
        <h1 className="text-xl font-semibold">Add a new task</h1>
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
            onClick={handleAddTodo}
          >
            Add
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

export default AddTodoModal;
