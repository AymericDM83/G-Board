import React from "react";
import {
  BsFillCloudSunFill,
  BsNewspaper,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
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
    <nav className=" relative lg:bg-gradient-to-t lg:from-gray-100 lg:to-white lg:h-screen text-indigo-500 p-5 lg:flex lg:flex-col lg:items-center lg:text-3xl lg:w-[150px]">
      <div className="flex justify-between items-center lg:flex lg:flex-col">
        <div>
          <FaGoodreads className="text-6xl md:text-7xl drop-shadow-xl lg:text-8xl lg:mb-10" />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-evenly lg:text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center items-center rounded-xl p-3 mt-5 bg-gray-200 transition-all drop-shadow-lg scale-105"
                : "flex flex-col justify-center items-center rounded-xl p-3 mt-5 transition-all hover:bg-gray-200 hover:drop-shadow-lg hover:scale-105"
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
                : "flex flex-col justify-center items-center rounded-xl p-3 mt-5 transition-all hover:bg-gray-200 hover:drop-shadow-lg hover:scale-105"
            }
            end
          >
            <BsNewspaper className="text-5xl mb-2 " />
            <p className="text-gray-500 font-semibold ">News</p>
          </NavLink>
          <NavLink
            to="/fun"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center items-center rounded-xl p-3 mt-5 bg-gray-200 transition-all drop-shadow-lg scale-105"
                : "flex flex-col justify-center items-center rounded-xl p-3 mt-5 transition-all hover:bg-gray-200 hover:drop-shadow-lg hover:scale-105"
            }
            end
          >
            <BsFillEmojiLaughingFill className="text-5xl mb-2 " />
            <p className="text-gray-500 font-semibold ">Fun area</p>
          </NavLink>
        </div>

        <div className="lg:hidden">
          {!open && (
            <GiHamburgerMenu
              onClick={toggle}
              className="text-3xl md:text-4xl transition-all"
            />
          )}
          {open && (
            <AiOutlineClose
              onClick={toggle}
              className="text-3xl md:text-4xl transition-all"
            />
          )}
        </div>
      </div>

      {open && (
        <div className="absolute bg-opacity-95 top-20 right-0 transition-all bg-gray-100 w-screen p-2 md:p-5 mt-10 text-xl md:text-3xl lg:hidden">
          <NavLink to="/" end>
            <p className="text-gray-500 font-semibold p-3 hover:text-indigo-500">
              Weather
            </p>
          </NavLink>

          <NavLink to="/news">
            <p className="text-gray-500 font-semibold p-3 hover:text-indigo-500">
              News
            </p>
          </NavLink>

          <NavLink to="/fun">
            <p className="text-gray-500 font-semibold p-3 hover:text-indigo-500">
              Fun area
            </p>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
