import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import Title from "../components/Title";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const [isFetching, setIsFetching] = useState(null);

  useEffect(() => {
    const getNewsData = async () => {
      setIsFetching(true);
      await axios
        .get(`https://api.spaceflightnewsapi.net/v4/articles/?limit=30`)
        .then((res) => {
          setNewsData(res.data.results);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsFetching(false));
    };
    getNewsData();
  }, [setNewsData]);

  return (
    <div className="lg:flex lg:flex-row max-w-[1440px] mx-auto ">
      <div>
        <Navbar />
      </div>
      <div className="lg:w-full animate-fadeIn">
        <div className="lg:flex lg:flex-col lg:justify-between lg:items-center">
          <Title title="Space-news" />
        </div>

        {isFetching ? (
          <div className="flex flex-col justify-center items-center text-indigo-500 py-20 mt-20">
            <AiOutlineLoading3Quarters className="animate-spin text-9xl " />
            <p className="animate-pulse text-indigo-500 text-3xl md:text-5xl font-bold mt-10">
              Loading News ...
            </p>
          </div>
        ) : (
          <div className="p-5 flex flex-col justify-center items-center text-center [&>*]:w-full animate-fadeIn">
            <div className="pt-4">
              {newsData.map((article, index) => {
                return <NewsCard data={article} key={index} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
