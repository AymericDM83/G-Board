import React from "react";

const Title = ({ title }) => {
  return (
    <div className="pt-5 pb-1 px-5 lg:hidden">
      <div className="py-6 px-3 drop-shadow-xl font-semibold text-white text-3xl text-center uppercase rounded-xl bg-gray-500 lg:px-10 lg:mx-1">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
