import React from "react";
import useUtilities from "../Hooks/useUtilities";

const VideoCardListType = ({ info, id }) => {
  const { dateFormatting, handleCurrentVideoInfo } = useUtilities();
  const { channelTitle, description, publishedAt, thumbnails, title } = info;
  return (
    <div className=" grid grid-cols-12 gap-3 w-full p-8  text-lg">
      <div
        onClick={() => handleCurrentVideoInfo(id)}
        className="col-span-5 cursor-pointer"
      >
        <img
          loading="lazy"
          className="w-full"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="col-span-7 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span>{dateFormatting(publishedAt)}</span>
        <span className="font-semibold">{channelTitle}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default VideoCardListType;
