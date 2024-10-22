import React from "react";
import useUtilities from "../Hooks/useUtilities";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const {
    dateFormatting,
    overflowText,
    numberFomatting,
    handleCurrentVideoInfo,
  } = useUtilities();
  return (
    <div className="">
      <div className="w-full">
        <div onClick={() => handleCurrentVideoInfo(info.id)}>
          <img
            className="rounded-lg w-full cursor-pointer"
            alt="thumbnail"
            src={thumbnails.medium.url}
          />
        </div>
      </div>
      <div className="p-2 flex flex-col justify-between  h-32">
        <span className="font-semibold">{overflowText(title)}</span>
        <span>{channelTitle}</span>
        <div className="flex gap-4">
          <span>{numberFomatting(statistics.viewCount)} views</span>
          <span>{dateFormatting(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
