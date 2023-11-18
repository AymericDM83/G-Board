import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillDropletFill, BsWind } from "react-icons/bs";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Topbar from "../components/Topbar";
import Loader from "../components/Loader";

const Weather = () => {
  const [locationData, setLocationData] = useState([{}]);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const getLocationData = () => {
    const apiKey = process.env.REACT_APP_API_WEATHERAPIKEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        setLocationData(res.data);
        setCity("");
        setError("");
      })
      .catch((err) => setError(err.code));
  };

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="lg:flex lg:flex-row max-w-[1440px] mx-auto ">
      <div>
        <Navbar />
      </div>
      <div className="lg:w-full animate-fadeIn">
        <div className="lg:flex lg:flex-col lg:justify-between lg:items-start">
          <Topbar />
          <Title title="Weather" />
        </div>

        <div className="px-5 mt-5 lg:mx-1 lg:pt-2 lg:pb-6 md:flex md:items-center">
          <input
            type="text"
            placeholder="Enter a city ..."
            className="py-3 pl-2 pr-10 mr-2 bg-gray-200 rounded-xl drop-shadow-sm w-full text-xl md:w-2/3 lg:w-4/5"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-indigo-400 p-3 mt-2 text-center text-white drop-shadow-sm text-2xl rounded-xl w-full hover:bg-indigo-300 transition-all md:w-1/3 md:mx-auto md:mt-0 lg:w-1/5 "
            onClick={getLocationData}
          >
            Validate
          </button>
        </div>

        {error === "ERR_BAD_REQUEST" ? (
          <p className="p-5 text-red-500 font-bold text-2xl text-center">
            City not found
          </p>
        ) : (
          <></>
        )}

        {typeof locationData.main === "undefined" ? (
          <div className="p-5 mt-5 text-2xl font-semibold text-center text-gray-700">
            <p>Enter a city</p>
          </div>
        ) : (
          <div className="p-5 flex flex-col justify-center items-center text-center [&>*]:w-full [&>*]:my-3 text-2xl [&>*]:drop-shadow-md lg:flex-row lg:flex-wrap lg:justify-evenly lg:items-stretch lg:[&>*]:w-5/12 lg:[&>*]:flex-grow lg:[&>*]:mx-1 lg:px-5 lg:py-2 [&>*]:lg:my-1 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-evenly items-center py-4 lg:py-10 text-white font-semibold bg-gray-400 rounded-xl lg:w-5/12 ">
              <div className="text-center">
                <img
                  src={`http://openweathermap.org/img/wn/${locationData?.weather[0]?.icon}@2x.png`}
                  alt="weather-icon"
                  className="min-w-[130px] min-h-[130px] animate-leftRight"
                />
              </div>
              <div className="[&>*]:p-1">
                <p className="text-4xl">
                  {locationData?.name}{" "}
                  <span className="text-2xl">
                    - {locationData?.sys?.country}
                  </span>
                </p>
                <p className="text-4xl">
                  {parseInt(locationData?.main?.temp)} °C
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row  justify-evenly items-center py-4 lg:py-10 text-white bg-indigo-300 rounded-xl text-2xl font-semibold lg:w-5/12">
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-1 ">
                <p className="font-bold underline">Feels Like</p>
                <p className="">
                  {parseInt(locationData?.main?.feels_like)} °C
                </p>
              </div>
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-1 ">
                <p className="font-bold underline">Max temp.</p>
                <p className="">{parseInt(locationData?.main?.temp_max)} °C </p>
              </div>
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-1 ">
                <p className="font-bold underline">Min temp.</p>
                <p className="">{parseInt(locationData?.main?.temp_min)} °C </p>
              </div>
            </div>

            <div className="flex flex-row justify-evenly items-center py-4 lg:py-10 text-white bg-indigo-300 rounded-xl text-2xl font-semibold lg:w-5/12">
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-2 ">
                <p className="font-bold underline">Sunrise</p>
                <p>
                  {new Date(locationData?.sys?.sunrise * 1000).toLocaleString(
                    "fr-FR",
                    { hour: "numeric", minute: "numeric" }
                  )}
                </p>
              </div>
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-2 ">
                <p className="font-bold underline">Sunset</p>
                <p>
                  {new Date(locationData?.sys?.sunset * 1000).toLocaleString(
                    "fr-FR",
                    { hour: "numeric", minute: "numeric" }
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-evenly items-center py-4 lg:py-10 text-white bg-gray-400 rounded-xl text-2xl font-semibold lg:w-5/12">
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-1 ">
                <BsFillDropletFill className="text-blue-500 text-7xl " />
                <p>{locationData?.main?.humidity} %</p>
              </div>
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-1 ">
                <BsWind className="text-white text-7xl" />
                <p>{parseInt(locationData?.wind?.speed * 3.6)} km/h </p>
              </div>
            </div>

            <div className="flex flex-col justify-evenly items-center py-4 lg:py-10 text-white bg-indigo-300 rounded-xl text-2xl font-semibold ">
              <div className="flex flex-col justify-between items-center py-5 [&>*]:p-1 ">
                <p className="font-bold underline">Atmospheric pressure</p>
                <p>{locationData?.main?.humidity} %</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
