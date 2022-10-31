import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const NewsCard = ({ data }) => {
  return (
    <div className="h-[280px] md:h-[210px] lg:h-[190px] xl:h-[170px] w-full flex flex-row rounded-xl bg-gray-100 text-gray-800 mb-5 drop-shadow-lg">
      <div className="flex flex-col justify-between items-stretch w-3/4 p-3">
        <div className="h-max">
          <p className="text-lg font-bold">{data.title}</p>
          <p className="text-xs text-gray-700 pt-4 font-semibold">
            {data.content}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-gray-400 font-semibold">{data.date}</p>
          <a
            href={data.readMoreUrl}
            className="pr-2 flex flex-row items-center text-indigo-500 font-semibold hover:scale-105 hover:text-indigo-300 transition-all"
            rel="noreferrer"
            target="_blank"
          >
            <p className="pr-2 text-lg">Read more</p>
            <BiLinkExternal className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="image w-1/4 h-full">
        <img
          src={data.imageUrl}
          alt="article-pic"
          className="h-full w-full object-cover rounded-r-xl"
        />
      </div>
    </div>
  );
};

export default NewsCard;
