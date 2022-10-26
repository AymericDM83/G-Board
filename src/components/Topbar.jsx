import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Topbar = () => {
  const [quoteData, setQuoteData] = useState({
    data: {
      author: "",
      quote: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.goprogram.ai/inspiration")
        .then((quote) => setQuoteData(quote))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <div className="px-5 py-1 mx-5 rounded-xl text-indigo-500 font-semibold flex flex-col justify-between items-center text-sm bg-gray-200 drop-shadow-md lg:flex-row lg:w-full lg:bg-white lg:mx-0 lg:rounded-none lg:drop-shadow-none lg:py-10 lg:text-md 2xl:text-lg">
      <p className="text-2xl mb-3 lg:text-4xl 2xl:text-5xl">
        Welcome to dashboard
      </p>
      <div className="flex flex-col justify-center items-center text-center xl:flex-row [&>*]:xl:px-2">
        <p className="text-gray-600 ">"{quoteData.data.quote}"</p>
        <p className="text-gray-600 underline">{quoteData.data.author}</p>
      </div>
    </div>
  );
};

export default Topbar;
