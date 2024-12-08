import React from "react";
import useTodoStore from "../stores/store";

function DayTab({ date }: { date: string }) {
  const dateData = date.split(" ");
  const day = dateData[0].split("")[0];
  const dateNum = dateData[2];
  const { currDate, setCurrDate } = useTodoStore();
  return (
    <div
      className={`flex flex-col rounded-xl font-semibold py-2 px-3 items-center cursor-pointer ${
        date === currDate ? "bg-gray-800 text-white" : ""
      }`}
      onClick={() => setCurrDate(date)}
    >
      <span className={`${date === currDate ? "text-white" : "text-gray-300"}`}>
        {day}
      </span>
      <span className="text-lg">{dateNum}</span>
    </div>
  );
}

export default DayTab;
