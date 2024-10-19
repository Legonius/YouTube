import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import VideoCard from "./VideoCard";
import { VideosList } from "../utils/constants";

const Body = () => {
  const [videoData, setVideoData] = useState(null);

  const suggestions = [
    "All",
    "news",
    "javascript",
    "Tailwiind",
    "nodejs",
    "reactjs",
    "data structures",
    "python",
    "HTML",
    "CSS3",
    "Bootsrap",
    "Typescript",
  ];
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const key = process.env.REACT_APP_YOUTUBE_APIKEY;
    const api = await fetch(`${VideosList}${key}`);
    const data = await api.json();
    setVideoData(data);
  };
  return (
    <div className="w-full h-full overflow-auto px-5 py-4">
      <div className="flex gap-4 overflow-auto ">
        {suggestions.map((btn, idx) => (
          <Buttons key={idx} title={btn} />
        ))}
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 mt-4  w-full overflow-auto">
        {videoData &&
          videoData.items.map((item) => (
            <VideoCard key={item.id} info={item} />
          ))}
        {/* {videoData && <VideoCard info={videoData.items[0]} />} */}
      </div>
    </div>
  );
};

export default Body;
