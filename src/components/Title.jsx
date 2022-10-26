import React from "react";

const Title = ({ title }) => {
  return (
    <div className="p-5 lg:hidden">
      <div className="p-3 drop-shadow-xl font-semibold text-white text-3xl text-center uppercase rounded-xl bg-indigo-500">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
