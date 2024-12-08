"use client";
import React from "react";
import AddTodoModal from "./AddTodoModal";
import useTodoStore from "../stores/store";

function AddButton() {
  const { currModal, toggleModal } = useTodoStore();
  return (
    <div className="w-full fixed bottom-1">
      <button
        className="mx-auto block rounded-full py-4 px-6 shadow-[0px_8px_40px_rgba(0,0,0,0.2)] text-4xl bg-white"
        onClick={() => toggleModal("add")}
      >
        +
      </button>
      {currModal === "add" && <AddTodoModal />}
    </div>
  );
}

export default AddButton;
