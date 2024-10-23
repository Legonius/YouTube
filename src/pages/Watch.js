import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { off } from "../utils/slices/appSlice";
import Comments from "../Components/Comments";
import VideoInfo from "../Components/VideoInfo";
import {
  COMMENTS_YOUTUBE_API,
  SEARCH_YOUTUBE_ID_API,
} from "../utils/constants";
import SuggestionVideos from "../Components/SuggestionVideos";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    dispatch(off());
    handleSearch(searchParams.get("v"), SEARCH_YOUTUBE_ID_API, setVideo);
  }, [searchParams]);
  useEffect(() => {
    if (video) {
      handleSearch(searchParams.get("v"), COMMENTS_YOUTUBE_API, setComments);
    }
  }, [video, searchParams]);

  const handleSearch = async (id, api, set) => {
    try {
      const fetching = await fetch(
        api + id + "&key=" + process.env.REACT_APP_YOUTUBE_APIKEY
      );
      const data = await fetching.json();
      set(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full flex overflow-hidden p-4 h- h-full overflow-y-auto">
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
        {video && <VideoInfo data={video.items[0]} />}
        {comments?.items?.length > 0 && (
          <Comments data={video.items[0]} comments={comments.items} />
        )}
      </div>
      {comments && (
        <div className="w-1/3">
          <SuggestionVideos suggest={video?.items[0]?.snippet?.tags} />
        </div>
      )}
    </div>
  );
};

export default Watch;
