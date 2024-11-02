import React from "react";

const Buton = ({ text }) => {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-300 to-zinc-500 group-hover:from-gray-600 group-hover:to-zinc-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-zinc-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {text}
      </span>
    </button>
  );
};

export default Buton;
