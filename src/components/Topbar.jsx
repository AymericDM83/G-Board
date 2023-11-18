import React from "react";

const Topbar = () => {
  return (
    <div className="hidden lg:flex px-5 py-1 mx-5 rounded-xl text-indigo-500 font-semibold flex-col justify-between items-center text-xs bg-gray-200 drop-shadow-md lg:flex-row  lg:w-full lg:bg-white lg:mx-0 lg:rounded-none lg:drop-shadow-none lg:pt-10 lg:pb-2 2xl:text-md">
      <p className="text-2xl mb-3 xl:px-2 lg:text-3xl 2xl:text-4xl">
        Welcome to Weatherboard
      </p>
      <div className="flex flex-col justify-center items-center text-center px-2 lg:mx-2 2xl:flex-row [&>*]:xl:px-2"></div>
    </div>
  );
};

export default Topbar;
