import React from "react";
import { FaGoodreads } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen  ">
      <FaGoodreads className="text-9xl  drop-shadow-xl lg:mb-10 text-indigo-500 animate-loader" />
    </div>
  );
};

export default Loader;
