import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="lg:flex lg:flex-row max-w-[1440px] mx-auto animate-fadeIn">
      <div>
        <Navbar />
      </div>
      <div className="lg:pt-[180px] lg:w-1/2 lg:mx-auto">
        <NavLink to="/weather">
          <div className="pt-5 pb-1 px-5">
            <div className="py-6 px-3 drop-shadow-xl font-semibold text-white text-3xl text-center uppercase rounded-xl bg-gray-400 hover:bg-indigo-300 lg:px-10 lg:mx-1 transition-all">
              <h2>WEATHER</h2>
            </div>
          </div>
        </NavLink>
        <NavLink to="/fun">
          <div className="pt-5 pb-1 px-5">
            <div className="py-6 px-3 drop-shadow-xl font-semibold text-white text-3xl text-center uppercase rounded-xl bg-gray-400 hover:bg-indigo-300 lg:px-10 lg:mx-1 transition-all">
              <h2>FUN AREA</h2>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
