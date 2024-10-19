import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const overflowText = (text) => {
    if (text.length > 50) {
      let cutText = text.slice(0, 50);
      return `${cutText}...`;
    }
    return text;
  };
  const numberFomatting = (nums) => {
    let numbers = nums;
    if (numbers.length > 6) {
      let newNumber = parseFloat(Number(numbers) / 1000000).toFixed(1);
      if (newNumber[newNumber.length - 1] < 1) {
        return Math.round(newNumber) + "M";
      }
      return newNumber + "M";
    }
    if (numbers.length > 3) {
      let newNumber = Math.round(Number(numbers) / 1000);

      return newNumber + "K";
    }
    return numbers;
  };
  const dateFormatting = (date) => {
    const now = Date.now();
    const publishedDate = new Date(date);
    const diff = now - publishedDate;
    let newDate = diff / 1000;
    if (newDate < 60) {
      return Math.round(newDate) + " sec ago";
    } else {
      newDate = newDate / 60;
    }
    if (newDate < 60) {
      return Math.round(newDate) + " mins ago";
    } else {
      newDate = newDate / 60;
    }
    if (newDate < 24) {
      return Math.round(newDate) + " hours ago";
    } else {
      newDate = newDate / 24;
    }
    return Math.round(newDate) + " days ago";
  };
  return (
    <div className="">
      <div className="w-full">
        <Link to={"/watch?v=" + info.id}>
          <img
            className="rounded-lg w-full"
            alt="thumbnail"
            src={thumbnails.medium.url}
          />
        </Link>
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
