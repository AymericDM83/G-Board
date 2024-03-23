import React from "react";

const Title = ({ title }) => {
  return (
    <div className="py-1 px-5 lg:hidden">
      <div className="py-3 px-3 drop-shadow-xl font-semibold text-indigo-400 text-3xl text-center uppercase lg:px-10 lg:mx-1">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
