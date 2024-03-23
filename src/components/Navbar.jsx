import React from "react";
import { BsFillCloudSunFill, BsFillEmojiLaughingFill } from "react-icons/bs";
import { FaSpaceShuttle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGoodreads } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav className=" relative lg:h-screen text-indigo-500 p-5 lg:flex lg:flex-col lg:items-center lg:text-3xl lg:w-[150px]">
      <div className="lg:fixed flex justify-between items-center lg:flex lg:flex-col">
        <div>
          <NavLink to="/">
            <FaGoodreads className="text-6xl md:text-7xl drop-shadow-xl lg:text-8xl lg:mb-10 transition-all hover:text-indigo-400" />
          </NavLink>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-evenly lg:text-lg">
          <NavLink
            to="/weather"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center items-center rounded-xl p-3 mt-5 bg-gray-200 transition-all drop-shadow-lg scale-105"
                : "flex flex-col justify-center items-center rounded-xl p-3 mt-5 transition-all hover:bg-gray-200 hover:drop-shadow-lg "
            }
            end
          >
            <BsFillCloudSunFill className="text-5xl mb-2 " />
            <p className="text-gray-500 font-semibold ">Weather</p>
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center items-center rounded-xl p-3 mt-5 bg-gray-200 transition-all drop-shadow-lg scale-105"
                : "flex flex-col justify-center items-center rounded-xl p-3 mt-5 transition-all hover:bg-gray-200 hover:drop-shadow-lg "
            }
            end
          >
            <FaSpaceShuttle className="text-5xl mb-2 " />
            <p className="text-gray-500 font-semibold ">Space-news</p>
          </NavLink>
          <NavLink
            to="/fun"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center items-center rounded-xl p-3 mt-5 bg-gray-200 transition-all drop-shadow-lg scale-105"
                : "flex flex-col justify-center items-center rounded-xl p-3 mt-5 transition-all hover:bg-gray-200 hover:drop-shadow-lg"
            }
            end
          >
            <BsFillEmojiLaughingFill className="text-5xl mb-2" />
            <p className="text-gray-500 font-semibold ">Fun area</p>
          </NavLink>
        </div>

        <div className="lg:hidden">
          {!open && (
            <GiHamburgerMenu
              onClick={toggle}
              className="text-3xl md:text-4xl transition-all cursor-pointer hover:-translate-y-1 hover:scale-105"
            />
          )}
          {open && (
            <AiOutlineClose
              onClick={toggle}
              className="text-3xl md:text-4xl transition-all cursor-pointer hover:-translate-y-1 hover:scale-105"
            />
          )}
        </div>
      </div>

      {open && (
        <div className="absolute z-20 bg-opacity-95 top-20 right-0 transition-all bg-gray-100 w-screen py-2 text-center mt-5 text-4xl h-[89vh] md:text-3xl lg:hidden">
          <NavLink to="/weather">
            <p className="text-gray-500 font-semibold py-8 px-3 hover:text-indigo-500">
              Weather
            </p>
          </NavLink>

          <NavLink to="/news">
            <p className="text-gray-500 font-semibold py-8 px-3 hover:text-indigo-500">
              Space-news
            </p>
          </NavLink>

          <NavLink to="/fun">
            <p className="text-gray-500 font-semibold py-8 px-3 hover:text-indigo-500">
              Fun area
            </p>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
