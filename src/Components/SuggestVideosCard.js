import React from "react";
import useUtilities from "../Hooks/useUtilities";

const SuggestVideoCard = ({ info, id }) => {
  const { dateFormatting, handleCurrentVideoInfo, overflowText } =
    useUtilities();
  const { channelTitle, publishedAt, thumbnails, title } = info;
  return (
    <li className=" grid grid-cols-12 gap-2 w-full h-auto pl-8 ">
      <div
        onClick={() => handleCurrentVideoInfo(id)}
        className="col-span-5 cursor-pointer"
      >
        <img
          loading="lazy"
          className="w-full rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="col-span-7 flex flex-col justify-between">
        <h1 className=" font-semibold">{overflowText(title)}</h1>
        <span className="font-semibold">{channelTitle}</span>
        <span>{dateFormatting(publishedAt)}</span>
      </div>
    </li>
  );
};

export default SuggestVideoCard;
