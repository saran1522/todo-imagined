"use client";
import React, { useState } from "react";
import Todo from "./Todo";
import useTodoStore from "../stores/store";
import UpdateTodoModal from "./UpdateTodoModal";
import TodoData from "../interface/TodoInterface";
import Loader from "./Loader";

function AllTodos() {
  const [currTodo, setCurrTodo] = useState<TodoData>();
  const { currModal, toggleModal, allTodos, currDate } = useTodoStore();
  const displayTodos =
    allTodos && allTodos?.filter((todo) => todo.date === currDate);
  const date = new Date().toDateString();
  if (!allTodos) return <Loader />;
  return (
    <div className="flex flex-col gap-3 p-4 min-h-full">
      <p className="ml-4 font-bold text-xl lg:py-2">
        {date === currDate ? "Today" : currDate}
      </p>
      {displayTodos && displayTodos?.length !== 0 ? (
        displayTodos?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCurrTodo={() => {
              console.log("inside curr todo");
              setCurrTodo(todo);
              toggleModal("update");
            }}
          />
        ))
      ) : (
        <div className="w-full flex justify-center items-center">
          <p className="text-5xl lg:text-7xl font-bold text-slate-200 text-center mt-20">
            No To-Do on {currDate}
          </p>
        </div>
      )}
      {currModal === "update" && currTodo && (
        <UpdateTodoModal todo={currTodo} />
      )}
    </div>
  );
}

export default AllTodos;
