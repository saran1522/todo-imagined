import React from "react";

function Loader() {
  return (
    <div className="h-[calc(100vh-150px)] w-full flex justify-center items-center">
      <span className="h-20 w-20 rounded-full border-4 border-gray-500 border-t-4 border-t-transparent loader"></span>
    </div>
  );
}

export default Loader;
