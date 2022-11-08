import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <Navbar />
      <div className="p-5 text-7xl text-indigo-400 lg:mt-[100px] lg:mx-[100px]">
        <p>ERREUR 404</p>
        <NavLink to="/">
          <p className="underline text-4xl mt-6">Retournez à l'accueil</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
