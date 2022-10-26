import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Topbar from "../components/Topbar";

const Fun = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <div>
        <Navbar />
      </div>
      <div className="lg:w-full">
        <div className="lg:flex lg:flex-col lg:justify-between lg:items-center">
          <Topbar />
          <Title title="Fun area" />
        </div>

        <div className="p-5 flex flex-col justify-center items-center text-center [&>*]:w-[200px]">
          <div className="">CARD</div>
          <div className="">CARD</div>
          <div className="">CARD</div>
          <div className="">CARD</div>
        </div>
      </div>
    </div>
  );
};

export default Fun;
