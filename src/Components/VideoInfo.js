import React, { useEffect } from "react";
import { GrDislike, GrLike } from "react-icons/gr";
import useUtilities from "../Hooks/useUtilities";
import { FaRegShareSquare } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

const VideoInfo = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, channelTitle, publishedAt, description } = snippet;
  const { numberFomatting, dateFormatting, overflowText } = useUtilities();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold">{channelTitle}</span>
          <button className="px-3 py-2 bg-red-600 dark:bg-white text-white dark:text-black rounded-full font-bold">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 px-4 py-2 rounded-full bg-slate-300/60 w-fit items-center">
            <GrLike />
            <span className="border-r-2 pr-3">
              {numberFomatting(statistics.likeCount)}
            </span>
            <GrDislike />
          </div>
          <div className="flex gap-2 px-4 py-2 rounded-full bg-slate-300/60 w-fit items-center">
            <FaRegShareSquare />
            <span>Share</span>
          </div>
          <div className="p-3 rounded-full bg-slate-300/60 w-fit aspect-square">
            <IoIosMore />
          </div>
        </div>
      </div>
      <div className="rounded-lg p-3 w-full bg-slate-100/20">
        <span className="font-bold">
          {numberFomatting(statistics.viewCount)} views{" "}
        </span>
        <span className="font-bold">{dateFormatting(publishedAt)} </span>
        <span>{overflowText(description, 200, "...more")}</span>
      </div>
    </div>
  );
};

export default VideoInfo;
