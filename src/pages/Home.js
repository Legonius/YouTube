import React, { useEffect, useState } from "react";
import Buttons from "../Components/Buttons";
import VideoCard from "../Components/VideoCard";
import { VideosList } from "../utils/constants";
import { useDispatch } from "react-redux";
import { on } from "../utils/slices/appSlice";

const Home = () => {
  const [videoData, setVideoData] = useState(null);
  const dispatch = useDispatch();

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
    dispatch(on());
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
      </div>
    </div>
  );
};

export default Home;
