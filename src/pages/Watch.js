import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { off } from "../utils/slices/appSlice";
import Comments from "../Components/Comments";
import VideoInfo from "../Components/VideoInfo";
import { SEARCH_YOUTUBE_ID_API } from "../utils/constants";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    dispatch(off());
    handleSearch(searchParams.get("v"));
  }, []);

  const handleSearch = async (id) => {
    try {
      const fetching = await fetch(
        SEARCH_YOUTUBE_ID_API +
          id +
          "&key=" +
          process.env.REACT_APP_YOUTUBE_APIKEY
      );
      const data = await fetching.json();
      setVideo(data.items[0]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full overflow-hidden p-4 h- h-full overflow-y-auto">
      <div className="w-2/3 max-w-[60rem] flex flex-col gap-6">
        <iframe
          className=" w-full aspect-video rounded-lg"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1"
          }
          title=" "
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {video && <VideoInfo data={video} />}
        {video && <Comments data={video} />}
      </div>
    </div>
  );
};

export default Watch;
