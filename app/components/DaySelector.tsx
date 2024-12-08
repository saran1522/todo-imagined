"use client";
import React from "react";
import DayTab from "./DayTab";

function DaySelector() {
  let count = -3;
  const days: string[] = Array.from({ length: 7 }, () => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + count);
    count++;
    return newDate.toDateString();
  });
  return (
    <div className="flex flex-col p-4  gap-3 text-gray-800 rounded-b-3xl w-full bg-white shadow-[0px_8px_40px_rgba(0,0,0,0.08)]">
      <h2 className="font-semibold text-3xl ml-4 lg:ml-14">onday</h2>
      <div className="flex justify-around ">
        {days.map((d, i) => (
          <DayTab key={i} date={d} />
        ))}
      </div>
    </div>
  );
}

export default DaySelector;
