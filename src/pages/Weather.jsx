import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Topbar from "../components/Topbar";

const Weather = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <div>
        <Navbar />
      </div>
      <div className="lg:w-full">
        <div className="lg:flex lg:flex-col lg:justify-between lg:items-start">
          <Topbar />
          <Title title="Weather" />
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

export default Weather;
