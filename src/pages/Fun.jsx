import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Topbar from "../components/Topbar";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import chuckNorrisPic from "../assets/img/chuck-norris.jpeg";

const Fun = () => {
  const [chuckNorrisData, setChuckNorrisData] = useState([{}]);
  const [breakingBadData, setBreakingBadData] = useState([{}]);
  const [excuseData, setExcuseData] = useState([{}]);
  const [funFactData, setFunFactData] = useState([{}]);

  const chuckNorrisRequest = axios.get(
    "https://api.chucknorris.io/jokes/random"
  );
  const breakingBadRequest = axios.get(
    "https://www.breakingbadapi.com/api/character/random"
  );
  const excuseRequest = axios.get(
    "https://excuser.herokuapp.com/v1/excuse/office/"
  );
  const funFactRequest = axios.get("https://asli-fun-fact-api.herokuapp.com");

  const [isFetching, setIsFetching] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      await axios
        .all([
          chuckNorrisRequest,
          breakingBadRequest,
          excuseRequest,
          funFactRequest,
        ])
        .then(
          axios.spread((...res) => {
            setChuckNorrisData(res[0]);
            setBreakingBadData(res[1]);
            setExcuseData(res[2]);
            setFunFactData(res[3]);
          })
        )
        .catch((err) => console.log(err))
        .finally(() => {
          setIsFetching(false);
        });
    };
    getData();
  }, []);

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
        <div>
          {isFetching ? (
            <div className="flex flex-col justify-center items-center text-indigo-500 py-20 mt-20">
              <AiOutlineLoading3Quarters className="animate-spin text-9xl " />
              <p className="animate-pulse text-indigo-500 text-3xl md:text-5xl font-bold mt-10">
                Loading ...
              </p>
            </div>
          ) : (
            <div className="px-5 my-2">
              <div className="flex flex-col justify-between items-center w-full bg-indigo-400 rounded-xl drop-shadow-lg my-5 p-2">
                <p className="p-1 text-white font-bold text-xl text-center underline">
                  Random excuse for your boss
                </p>
                <p className="p-3 text-white font-semibold text-base text-center">
                  {excuseData?.data?.[0]?.excuse}
                </p>
              </div>

              <div className="flex flex-row justify-between items-center w-full bg-gray-200 rounded-xl drop-shadow-lg my-5">
                <img
                  src={chuckNorrisPic}
                  alt="chuckNorrisPic"
                  className="w-1/3 rounded-l-xl h-full object-cover"
                />
                <p className="p-3 text-gray-700 h-max font-semibold text-base flex-grow text-center">
                  {chuckNorrisData?.data?.value}
                </p>
              </div>

              <div className="flex flex-col justify-between items-center w-full bg-indigo-400 rounded-xl drop-shadow-lg my-5 p-2">
                <p className="p-1 text-white font-bold text-xl text-center underline">
                  Fun Fact
                </p>
                <p className="p-3 text-white font-semibold text-base text-center">
                  {funFactData?.data?.data?.fact}
                </p>
              </div>

              {/* <div className="flex flex-col justify-between w-full bg-gray-200 rounded-xl drop-shadow-lg my-5 p-2"></div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fun;
